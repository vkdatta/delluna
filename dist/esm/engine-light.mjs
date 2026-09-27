export const name="engine-light";
export const id="dl_bf235ca793bc46f2ad38";
export const url=new URL("../icons/engine-light.svg?v=0109d7b2c49c408a171abe259b5e6467ba5f4edc13ac03890f4980f422402e52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
