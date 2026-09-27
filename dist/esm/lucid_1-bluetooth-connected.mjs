export const name="lucid_1-bluetooth-connected";
export const id="dl_9ba53cd97cb541d0817b";
export const url=new URL("../icons/lucid_1-bluetooth-connected.svg?v=b3f7dfdbc7d0afdc323af3af1eccb261d1ff323fa4905a2839bdfb2f314ed436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
