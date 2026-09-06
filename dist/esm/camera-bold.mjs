export const name="camera-bold";
export const id="dl_5bdfa7cdc6e84e729aa6";
export const url=new URL("../icons/camera-bold.svg?v=0cc16a982a54cc58c6a0368ff73b36da62ca94e06b22a826d86f9e5347784ecb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
