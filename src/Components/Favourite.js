import React, { Component } from "react";
import "./Favourite.css";

export default class Favourite extends Component {
  render() {
    return (
      <div>
        <>
          <div className="main">
            <div className="row">
              <div className="col-3">
                <ul class="list-group favourites-genres">
                  <li class="list-group-item">All Genres</li>
                  <li class="list-group-item">Action</li>
                  <li class="list-group-item">Comedy</li>
                  <li class="list-group-item">A fourth item</li>
                  <li class="list-group-item">And a fifth one</li>
                </ul>
              </div>
              <div className="col-9 favourites-table">
                <div className="row">
                  <input type="text" className="input-group-text col" />
                  <input type="number" className="input-group-text col" />
                </div>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}
