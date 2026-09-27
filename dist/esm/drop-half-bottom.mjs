export const name="drop-half-bottom";
export const id="dl_16b598fc404247009192";
export const url=new URL("../icons/drop-half-bottom.svg?v=fdfa6a2c2393745f2f4f14dab853401efc9ed7e2cbbe2525a3efac5d78553050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
