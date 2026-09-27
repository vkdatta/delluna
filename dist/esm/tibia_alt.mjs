export const name="tibia_alt";
export const id="dl_d3f3c9ec5df902b55155";
export const url=new URL("../icons/tibia_alt.svg?v=4e4b6b50ee0d994ed055da7842cac5f093304f069d8865275eda6f3f47108cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
