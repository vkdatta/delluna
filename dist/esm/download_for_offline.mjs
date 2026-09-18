export const name="download_for_offline";
export const id="dl_7e93b5dbe7074d92b73e";
export const url=new URL("../icons/download_for_offline.svg?v=0a2355b2337037f9e2c4a025e5c9a5ff1626a20f30160f9357561098ab7bbfad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
