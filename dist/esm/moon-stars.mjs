export const name="moon-stars";
export const id="dl_1b67b415954e445881c5";
export const url=new URL("../icons/moon-stars.svg?v=52d51e8fa31f6c3fd749bd8a1db2432e8ae41df80d3e2d5a930ee865d208347e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
