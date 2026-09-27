export const name="globe";
export const id="dl_b5f3f5a65a074bcba617";
export const url=new URL("../icons/globe.svg?v=5f0849e30f950d4e540bfcb2093b5c445cadafa21f4c775e3ce9337e244505ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
