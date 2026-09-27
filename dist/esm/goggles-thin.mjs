export const name="goggles-thin";
export const id="dl_10bf1ef868e54aec8923";
export const url=new URL("../icons/goggles-thin.svg?v=de32a5a3ed07a7907587904c0b0e6dff4ff79ff3ff8a5a9deee34934be2904f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
