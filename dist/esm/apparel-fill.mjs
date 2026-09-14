export const name="apparel-fill";
export const id="dl_471e95301310499cbb22";
export const url=new URL("../icons/A/apparel-fill.svg?v=34cea12b4f5d21995483aed11e9e2fe171ddeec09a2dd0584708993fc20e6b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
