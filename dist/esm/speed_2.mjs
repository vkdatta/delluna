export const name="speed_2";
export const id="dl_6e43ea8a8b7b480c8185";
export const url=new URL("../icons/S/speed_2.svg?v=44401771cf80eaa33817936860b01bb7be92b7338e7ed9ccd3b7a4a488f3bb2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
