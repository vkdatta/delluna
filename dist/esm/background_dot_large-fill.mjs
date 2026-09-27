export const name="background_dot_large-fill";
export const id="dl_c78e6d1e841c9f603c1b";
export const url=new URL("../icons/background_dot_large-fill.svg?v=a800d1e3e66abc28c65c45c7787133cbaf83ec33ab4e7bb0efca261b7ce58d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
