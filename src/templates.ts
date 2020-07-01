
export const templates = {
    dashboard: `<div id="dashboard">
                    <div id="btn-wrapper">
                        <div id="addlnbtn">Add Loan</div>
                    </div>
                    <label for="active">Due pending</label>
                    <div id="active"></div>
                    <div style="padding: 2px;"></div>
                    <label for="passive">Due Paid</label>
                    <div id="passive"></div>                    
                </div>`,
    loanform: `<div class="container" id="overlay-form">
                    <span style="float: right;" id="closebtn">X</span>
                    <div class="row">
                        <div class="col-25">
                            <label for="loanNumber">Loan Number</label>
                        </div>
                        <div class="col-60">
                            <input type="text" id="loanNumber" placeholder="Enter Loan Number"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="amount">Amount</label>
                        </div>
                        <div class="col-60">
                            <input type="text" id="amount" placeholder="Enter Loan Amount"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="due">Due Amount</label>
                        </div>
                        <div class="col-60">
                            <input type="text" id="due" placeholder="Enter Due Amount"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="dueday">Due Day</label>
                        </div>
                        <div class="col-60">
                            <input type="text" id="dueday" placeholder="Enter Due Day"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="loanType">Loan Type</label>
                        </div>
                        <div class="col-60">
                            <select id="loanType" selected=0>
                                <option value="HL">Home Loan</option>
                                <option value="PL">Personal Loan</option>
                                <option value="CL">Car Loan</option>
                                <option value="CC">Credit Card</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="tenor">Tenor</label>
                        </div>
                        <div class="col-60">
                            <input type="text" id="tenor" placeholder="Enter Loan Tenor"></input>
                        </div>
                    </div>
                    <div id="btn-wrapper">
                        <button id="svelnbtn">Save Loan</button>
                        <button id="clslnbtn">Close</button>
                    </div>
                </div>`,
    readonlyloanform: `<div class="container" id="overlay-form">
                    <span style="float: right;" id="closebtn">X</span>
                    <div class="row">
                        <div class="col-40">
                            <label for="loanNumber">Loan Number</label>
                        </div>
                        <div class="col-60">
                            <output id="loanNumber"></output>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-40">
                            <label for="amount">Amount</label>
                        </div>
                        <div class="col-60">
                            <output id="amount"></output>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-40">
                            <label for="due">Due Amount</label>
                        </div>
                        <div class="col-60">
                            <output id="due"></output>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-40">
                            <label for="dueday">Due Day</label>
                        </div>
                        <div class="col-60">
                            <output id="dueday"></output>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-40">
                            <label for="loanType">Loan Type</label>
                        </div>
                        <div class="col-60">
                            <output id="loanType"></output>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-40">
                            <label for="monthlyStatus">Monthly Status</label>
                        </div>
                        <div class="col-60">
                            <output id="monthlyStatus"></output>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-40">
                            <label for="tenor">Tenor</label>
                        </div>
                        <div class="col-60">
                            <output id="tenor"></output>
                        </div>
                    </div>
                </div>`
}