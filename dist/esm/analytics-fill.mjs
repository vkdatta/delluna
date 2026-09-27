export const name="analytics-fill";
export const id="dl_be2118bfdd79af70faa7";
export const url=new URL("../icons/analytics-fill.svg?v=c5180871e836d59e6b34ef0f13319b9fd8b101815a95f49aa439bb441af73897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
