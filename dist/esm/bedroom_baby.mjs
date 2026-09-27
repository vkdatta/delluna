export const name="bedroom_baby";
export const id="dl_75c43aa06532f7f5a5de";
export const url=new URL("../icons/bedroom_baby.svg?v=44f6a3c5b7aa31db6f2da01e308c96e8ebc283c73411070e7a0b8f2693de87f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
