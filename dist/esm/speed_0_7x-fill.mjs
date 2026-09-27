export const name="speed_0_7x-fill";
export const id="dl_9530074d5b314eb49086";
export const url=new URL("../icons/speed_0_7x-fill.svg?v=8754295b3aa36fd39de717501e4b52dcbbfb299f8faad13b96a0b0f5fe444845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
