export const name="lucid_2-lamp-wall-down";
export const id="dl_fe975e6379134dbcb1b8";
export const url=new URL("../icons/lucid_2-lamp-wall-down.svg?v=d00631bb0f3c316ad7a37f4d20f00b1585aa199adc68e6a7b34e76b46d3922c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
