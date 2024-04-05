/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { IThemeManager } from '@jupyterlab/apputils';
import { DataprocWidget } from '../controls/DataprocWidget';
import BigQueryDatasetInfo from './bigQueryDatasetInfo';

interface IDatabaseProps {
  title: string;
}

const BigQueryDatasetInfoWrapper = ({
  title,
}: IDatabaseProps): React.ReactElement => {
  const renderTable = () => {
    return (
      <>
          <BigQueryDatasetInfo dataset={title} />
      </>
    );
  };

  return (
    <div>
      <div className="dpms-Wrapper">
        <div className="title-overlay">{title}</div>
          <div className="db-title">Dataset info</div>
        {renderTable()}
      </div>
    </div>
  );
};

export class BigQueryDatasetWrapper extends DataprocWidget {
  constructor(
    title: string,
    themeManager: IThemeManager
  ) {
    super(themeManager);
    this.title.label = title;
  }

  renderInternal(): React.ReactElement {
    return (
      <BigQueryDatasetInfoWrapper
        title={this.title.label}
      />
    );
  }
}