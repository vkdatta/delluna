export const name="circle-dashed-fill";
export const id="dl_d4608073cb594363a679";
export const url=new URL("../icons/circle-dashed-fill.svg?v=db79749d5be0738958053cdfb4534afc79b0b497ca2aab35a636c725e5f7ba90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
