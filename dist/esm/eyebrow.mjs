export const name="eyebrow";
export const id="dl_a4a0bc08a788a312f18c";
export const url=new URL("../icons/eyebrow.svg?v=1594007636399d8b7c97e31ddff0244aeef3ad173211a5a06e9867d18e0c1357",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
