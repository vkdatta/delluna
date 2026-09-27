export const name="square";
export const id="dl_5ca45a80a2a98e730115";
export const url=new URL("../icons/square.svg?v=ce2141ec4ca62389230da6b1b70246b6aee78dcd855450d04bfd84ba9d8f7944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
