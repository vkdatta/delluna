export const name="computer_arrow_up-fill";
export const id="dl_ef23d04f9d57ee0707ab";
export const url=new URL("../icons/computer_arrow_up-fill.svg?v=5fe3b6e1f5186200ba4d0a0925e0a9bf12b01a1cc82ce0dcfe68ab797a1d0f85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
