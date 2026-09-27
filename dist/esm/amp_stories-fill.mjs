export const name="amp_stories-fill";
export const id="dl_e5f1b38a8a411ba2ede9";
export const url=new URL("../icons/amp_stories-fill.svg?v=84036eaae5fed3d7953961ec0a41ed4eb920aa8826e932c0b537ba7fb4b42567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
