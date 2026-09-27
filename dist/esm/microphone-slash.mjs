export const name="microphone-slash";
export const id="dl_58cf90f2d8eb44968d59";
export const url=new URL("../icons/microphone-slash.svg?v=cd57ec88deed1f85f9063fec902d86b9ea585aed09e740bf1d8bba1397e076ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
