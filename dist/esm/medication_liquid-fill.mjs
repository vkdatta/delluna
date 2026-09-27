export const name="medication_liquid-fill";
export const id="dl_86bd3c5d06dffead7d4c";
export const url=new URL("../icons/medication_liquid-fill.svg?v=b3b5411ecfe5c5339884b6ee8f4be1b73450479f4d782742e02fa7b5ff969874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
