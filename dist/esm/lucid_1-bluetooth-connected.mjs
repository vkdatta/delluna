export const name="lucid_1-bluetooth-connected";
export const id="dl_9ba53cd97cb541d0817b";
export const url=new URL("../icons/lucid_1-bluetooth-connected.svg?v=1cedbbda58e9bacd7185edf9801be70d396bf0fe4d4be52808153cb9ac443e76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
