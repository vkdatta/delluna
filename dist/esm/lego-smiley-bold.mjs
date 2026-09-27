export const name="lego-smiley-bold";
export const id="dl_73a4564c4c714024a1e9";
export const url=new URL("../icons/lego-smiley-bold.svg?v=eed22acfa7f8a09a949fd093910d1aca46be9427c97b3a06c006b8a74c20103b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
