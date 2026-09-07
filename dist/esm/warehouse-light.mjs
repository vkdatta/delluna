export const name="warehouse-light";
export const id="dl_9c63253c43384568b036";
export const url=new URL("../icons/W/warehouse-light.svg?v=615db978dad0215cf0f6da99d369386a35bdf1d3a551681e321763aa37bfda74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
