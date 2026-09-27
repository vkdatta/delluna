export const name="scooter-fill";
export const id="dl_da1f83de6a53306ec618";
export const url=new URL("../icons/scooter-fill.svg?v=9979746a53f746c91146d5cb6ae8d124da09d9653722045f3ade8be4c7368eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
