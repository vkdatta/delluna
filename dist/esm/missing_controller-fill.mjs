export const name="missing_controller-fill";
export const id="dl_feb35d0358e9df956634";
export const url=new URL("../icons/missing_controller-fill.svg?v=25bbaaa7a701dc1bfa40def5dd07c738c99fa4be10e4929a8dd06a96000272c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
