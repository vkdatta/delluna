export const name="standard-definition-fill";
export const id="dl_25d4070197bace74165f";
export const url=new URL("../icons/standard-definition-fill.svg?v=73f82a34b2229092bebfcf056a7f9f137dff2c6c02ebd0347e3d5b9d49a4289b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
