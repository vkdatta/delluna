export const name="steam-logo-light";
export const id="dl_9c64e7b02246df6548cc";
export const url=new URL("../icons/steam-logo-light.svg?v=d7ebe809c341df00412820cda39e76fb93ce6cc5ca52a5e2964acf8feceabc86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
