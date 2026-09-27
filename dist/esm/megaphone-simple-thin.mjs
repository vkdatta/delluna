export const name="megaphone-simple-thin";
export const id="dl_8a765932f8894be5bc59";
export const url=new URL("../icons/megaphone-simple-thin.svg?v=dc9b05d78a47f73068a718c6c8f529ef2e1a4f7b1819f7642c62d43949e49cb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
