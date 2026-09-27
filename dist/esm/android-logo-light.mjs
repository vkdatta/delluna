export const name="android-logo-light";
export const id="dl_4973f880bc6049fca263";
export const url=new URL("../icons/android-logo-light.svg?v=96c045d3ad27605e3d36f3e36cf7cfad140d64cf647290bdb9fd1f706ca45f2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
