export const name="battery-low-bold";
export const id="dl_8b0595076f0d4ec7b36b";
export const url=new URL("../icons/battery-low-bold.svg?v=59eeb186fbde7b64d8a0a8810fa95e5b9f3753667179e5fa8b20bd6a1afc35a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
