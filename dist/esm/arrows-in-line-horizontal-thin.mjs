export const name="arrows-in-line-horizontal-thin";
export const id="dl_5ca167d75b344ceb9bd3";
export const url=new URL("../icons/arrows-in-line-horizontal-thin.svg?v=d493c41804c2fb0bddf3dd10fc8a556be2c389954892962fec2d563dae17b456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
