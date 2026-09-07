export const name="link-duotone";
export const id="dl_a37b16cb97e74f03adee";
export const url=new URL("../icons/link-duotone.svg?v=74735ed9c69ae2bc99d9e4bd258a94e20635f2000e1fb17d110d1fc89f317895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
