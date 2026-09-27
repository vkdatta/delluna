export const name="azm-fill";
export const id="dl_eb36a2d336d607ee3c6d";
export const url=new URL("../icons/azm-fill.svg?v=a680ca76716ea3af07f1ef2d7c668e31e0a8766f6e812a2a0267840c68327eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
