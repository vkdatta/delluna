export const name="list-fill";
export const id="dl_e5b11b2013564272b5c0";
export const url=new URL("../icons/list-fill.svg?v=1df4bd0e497c551871da87fc5de752a81ff397c9b8fd9da10e319630e60d412f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
