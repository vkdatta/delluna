export const name="counter_6";
export const id="dl_a6273187062f24a5fc6e";
export const url=new URL("../icons/counter_6.svg?v=c5f210133167caa2de87ea6955ea41d0341e7fb446222581c82c1c2e92d93d14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
