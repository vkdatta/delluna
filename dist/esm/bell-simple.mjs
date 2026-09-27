export const name="bell-simple";
export const id="dl_a5eaa88bdeed4cf8b3cd";
export const url=new URL("../icons/bell-simple.svg?v=0309e8460e65e4fd9a91b6540692a71f2863895d950e9056062a3a9f54da8a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
