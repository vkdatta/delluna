export const name="upload-simple";
export const id="dl_63f0bac9c6e86e82cf28";
export const url=new URL("../icons/upload-simple.svg?v=e5f73e509f3e7324dd564ed2d02d01d816e06cbdea41b6882e2b8e2c60ce8371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
