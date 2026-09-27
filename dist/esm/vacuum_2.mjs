export const name="vacuum_2";
export const id="dl_b942141ebb9f73b61bb2";
export const url=new URL("../icons/vacuum_2.svg?v=fa6bfcfb7a75aa300a908fdf67f3c60fde321522a8ff1bf76d8bc04c3be4dec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
