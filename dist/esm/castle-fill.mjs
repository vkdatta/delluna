export const name="castle-fill";
export const id="dl_760b06819bc2c7f852ae";
export const url=new URL("../icons/castle-fill.svg?v=3d109f1b9ab5e53ab463c4174ce467a496cd3e61b8387c91e2a53a76d9d71452",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
