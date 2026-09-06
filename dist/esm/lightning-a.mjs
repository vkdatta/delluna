export const name="lightning-a";
export const id="dl_8bb1c0c28fb7416d90da";
export const url=new URL("../icons/lightning-a.svg?v=e4df6e557f2f0aa125d2ca1bf3b274ebae6b26e1d7e099a5a74c328dfcaade1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
