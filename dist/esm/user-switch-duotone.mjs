export const name="user-switch-duotone";
export const id="dl_a665c45f8d1045629ae6";
export const url=new URL("../icons/U/user-switch-duotone.svg?v=795c6707352bd922b333ea22f894787143708f6e4cf7268cd3f9ee57e06d4ce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
