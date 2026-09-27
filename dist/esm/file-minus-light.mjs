export const name="file-minus-light";
export const id="dl_2fa480fb26be4894bd87";
export const url=new URL("../icons/file-minus-light.svg?v=b8076496cbe1981ee6f36aa8f5e801f7991264900a8768e21724d2d99ea483fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
