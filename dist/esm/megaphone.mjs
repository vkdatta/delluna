export const name="megaphone";
export const id="dl_baab3850cabc413b9fa2";
export const url=new URL("../icons/megaphone.svg?v=3e95c5ec943f4b9345efa8c04fde59e70e33ae1e8a06b3204cf30c19c2dc3b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
