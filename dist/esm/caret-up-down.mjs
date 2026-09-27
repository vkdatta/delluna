export const name="caret-up-down";
export const id="dl_cd733bed1fdf43ea906c";
export const url=new URL("../icons/caret-up-down.svg?v=a86acc3372db479a340dc54ebdf0522de7ba7e017919cdb36f98e0b9ce8c835f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
