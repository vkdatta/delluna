export const name="battery-warning-vertical-duotone";
export const id="dl_2bfe88e3ec104e58bb38";
export const url=new URL("../icons/battery-warning-vertical-duotone.svg?v=8106946d7e20d7bc67ef14cb92ee9ae3c348b98543ffee7d7813ad5f1200d772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
