export const name="battery_change-fill";
export const id="dl_0b8235f1432d9332d1f4";
export const url=new URL("../icons/battery_change-fill.svg?v=c8e034442ad1e26ab6b226df18ae35b99a84eafe3c2bc12fad679d9486879c68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
