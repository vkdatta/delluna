export const name="alarm_off-fill";
export const id="dl_ca1e33e01ecd449690a7";
export const url=new URL("../icons/A/alarm_off-fill.svg?v=bcd9227c6e596fb445c6d6746eaf83f6055ff9e8786b7ac5d0c4300712a1ae55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
