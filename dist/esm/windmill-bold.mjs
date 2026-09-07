export const name="windmill-bold";
export const id="dl_e8445dcb6eaa47d5803f";
export const url=new URL("../icons/W/windmill-bold.svg?v=2da0e7eb00ba6d6a5e475ec9b479b1d15f975f084f219216848f6c84de648c59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
