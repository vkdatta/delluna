export const name="lock-open";
export const id="dl_6b4675e037f4432abe53";
export const url=new URL("../icons/lock-open.svg?v=defddf74198e913dc0c353fed92dc55ec251ac2c8781d595167683c0dd4a872f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
