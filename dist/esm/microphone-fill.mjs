export const name="microphone-fill";
export const id="dl_11f609c34d3049dfafb9";
export const url=new URL("../icons/microphone-fill.svg?v=9232c7191daa6a4242208fa5e10dfd5f4879f41202df23fa183918bc5a87ee65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
