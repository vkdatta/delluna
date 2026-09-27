export const name="sketch-logo-thin";
export const id="dl_d03042cf61698c0ff79c";
export const url=new URL("../icons/sketch-logo-thin.svg?v=e2704620a000f1b7f12e7d9da2c8e7116eaf9ca0a6ba4f263fb7b562be5765a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
