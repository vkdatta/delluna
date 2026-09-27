export const name="chair-thin";
export const id="dl_5172f44321a943c19569";
export const url=new URL("../icons/chair-thin.svg?v=44383f24927a6f20c55a38e44ba1c9b8152d1eae0b77dfb0c4587c12ca12f8a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
