export const name="caret-circle-down-bold";
export const id="dl_15db6b35db134409a1ee";
export const url=new URL("../icons/caret-circle-down-bold.svg?v=cfd8d9c617492ab5436fa99fe3aa23584e30e6749a4f5facccb76d5b442f38eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
