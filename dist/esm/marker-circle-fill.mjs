export const name="marker-circle-fill";
export const id="dl_2585452e5f3f4532bb38";
export const url=new URL("../icons/marker-circle-fill.svg?v=9a3a22a8c70041d92c497bb5a72e01e9188e073bbe2e10067076058030c6d4e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
