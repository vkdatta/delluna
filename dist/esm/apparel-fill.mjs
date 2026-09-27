export const name="apparel-fill";
export const id="dl_068c637579efd33fc6c2";
export const url=new URL("../icons/apparel-fill.svg?v=20bef73e322efeab5c5d3445872d37df207da78dc662168c85a825c7399450ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
