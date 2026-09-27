export const name="lucid_1-bell-minus";
export const id="dl_c353882438f64dc59d56";
export const url=new URL("../icons/lucid_1-bell-minus.svg?v=a311b63c82acad668566d4c4ec5849220af61894ad093352a9a2e60ebcd7b578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
