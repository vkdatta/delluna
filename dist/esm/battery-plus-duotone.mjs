export const name="battery-plus-duotone";
export const id="dl_3b168784a47c4c368867";
export const url=new URL("../icons/battery-plus-duotone.svg?v=3e10a0d838232786a7d6a401da2a3595ea92dcad0e6f5deeae91e43d1eadd992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
