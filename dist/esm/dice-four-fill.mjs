export const name="dice-four-fill";
export const id="dl_c802c9cffa374e149cc2";
export const url=new URL("../icons/dice-four-fill.svg?v=67d2b58c1d717a440e3dad93fe74e7e2de1a939a5f77988bc126e79d6ab7b5af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
