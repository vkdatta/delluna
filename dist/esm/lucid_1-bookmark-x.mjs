export const name="lucid_1-bookmark-x";
export const id="dl_b76297e049874418942d";
export const url=new URL("../icons/lucid_1-bookmark-x.svg?v=7c5c16ec28cc115aa90c27207686c6cfd31a84c8dd27f57e0653fc6c9f21792c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
