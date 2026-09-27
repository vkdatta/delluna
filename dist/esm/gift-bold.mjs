export const name="gift-bold";
export const id="dl_64bbeea3bb3045f39986";
export const url=new URL("../icons/gift-bold.svg?v=adfedfe0a3a29a674410e314f1ac88d370e7b5389b0b23d53d5be36dbff8defa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
