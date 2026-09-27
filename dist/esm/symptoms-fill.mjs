export const name="symptoms-fill";
export const id="dl_011220376c3aa4d3a2b2";
export const url=new URL("../icons/symptoms-fill.svg?v=5dd915db28a9e8db6914d722f2c758f4302efbab426fbd1924153d98fbaba84b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
