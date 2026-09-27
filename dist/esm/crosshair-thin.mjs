export const name="crosshair-thin";
export const id="dl_b9dc80e090f54d478e72";
export const url=new URL("../icons/crosshair-thin.svg?v=a6a89c6e59ba7af7e53b5bafe88ca028e99f398cd0af8019952d37874a1a47d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
