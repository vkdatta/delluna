export const name="arrow-fat-down-duotone";
export const id="dl_1c2ad9ba224749acb615";
export const url=new URL("../icons/arrow-fat-down-duotone.svg?v=ef53f5350a609075a54193d2e3ffa66b8c2621694bd0ad2503162cdcd7614c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
