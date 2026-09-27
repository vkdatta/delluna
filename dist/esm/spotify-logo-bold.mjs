export const name="spotify-logo-bold";
export const id="dl_02f7df33a691fbe1509f";
export const url=new URL("../icons/spotify-logo-bold.svg?v=62f7636c79828b7d21f9f2da92f5dd5d71db845cb413f863b29135f61c68d6ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
