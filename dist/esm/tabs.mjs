export const name="tabs";
export const id="dl_df30e01c87b86b3018e4";
export const url=new URL("../icons/tabs.svg?v=2e31855fe177a21956b947d4e232afaa3f8f6cc9dc6e7c5b7eacc6072ff329ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
