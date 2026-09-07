export const name="android-logo-light";
export const id="dl_4973f880bc6049fca263";
export const url=new URL("../icons/android-logo-light.svg?v=e5b5512fe4ead0673e3e8c12b827b546acc9c908fb08607d66083fc5fd1a3ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
