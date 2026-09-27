export const name="plus-minus-duotone";
export const id="dl_b7d13fef4c904da2a7b6";
export const url=new URL("../icons/plus-minus-duotone.svg?v=097e7f7e3fabaa261a656964214d788f69d054858c33f51bb688aff7e42166fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
