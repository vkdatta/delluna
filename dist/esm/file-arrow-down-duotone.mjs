export const name="file-arrow-down-duotone";
export const id="dl_a1f67b1bc7504039b31b";
export const url=new URL("../icons/file-arrow-down-duotone.svg?v=1d09e153b6ed11dc3f71406eeb58c7c3d657183c0765bc007dd68904cbc3719e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
