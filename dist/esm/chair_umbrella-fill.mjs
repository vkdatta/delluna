export const name="chair_umbrella-fill";
export const id="dl_802699cd596beda3dcb7";
export const url=new URL("../icons/chair_umbrella-fill.svg?v=9747e70df6d52492bc4ec0b75de9ddc8183d73893fd0f4cbe622b34038d92b0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
