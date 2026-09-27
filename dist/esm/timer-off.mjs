export const name="timer-off";
export const id="dl_ea685f37361d4a65abe7";
export const url=new URL("../icons/timer-off.svg?v=9a0f6a6e0566651796749e994801d31acdeaf647a27f79e528c7efe20d3841f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
