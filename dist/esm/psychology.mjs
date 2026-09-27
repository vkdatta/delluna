export const name="psychology";
export const id="dl_2d59c1e5868531e1acd7";
export const url=new URL("../icons/psychology.svg?v=27eb197b6639e96a92c40dce88d674f1d54c362543b1fb69049516c73fe9ff33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
