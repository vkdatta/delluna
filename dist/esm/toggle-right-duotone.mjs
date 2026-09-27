export const name="toggle-right-duotone";
export const id="dl_4109ede82a3e37b4d9ed";
export const url=new URL("../icons/toggle-right-duotone.svg?v=7d6e3166fa8688f66c55e420cbe2816fcb96ec1d53763bf3ede002c937a22855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
