export const name="flower-lotus-duotone";
export const id="dl_1144d8ab1f1344e0b649";
export const url=new URL("../icons/flower-lotus-duotone.svg?v=cd30cef804e68629bcf851b2a80be9c3618d2d46d1aced0d9ebb23b4b6292137",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
