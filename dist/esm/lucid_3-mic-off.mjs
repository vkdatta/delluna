export const name="lucid_3-mic-off";
export const id="dl_5d211a81cb3248afa3c2";
export const url=new URL("../icons/lucid_3-mic-off.svg?v=e2265b710315055f747e6b77a5da6b30f49deb4987854fcb3444ae5e5f3eeb7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
