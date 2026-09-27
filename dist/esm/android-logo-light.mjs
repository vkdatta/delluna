export const name="android-logo-light";
export const id="dl_4973f880bc6049fca263";
export const url=new URL("../icons/android-logo-light.svg?v=03d6f1a400134ebba1872859fe37c2ab64df3a45414395fcd45eed481b6548c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
