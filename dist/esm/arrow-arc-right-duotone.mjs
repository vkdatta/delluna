export const name="arrow-arc-right-duotone";
export const id="dl_f0404604b2754c679618";
export const url=new URL("../icons/arrow-arc-right-duotone.svg?v=199139812a3059903a3feb2c4afd6174f9e6152e98806a5b9cab24f38abbcd5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
