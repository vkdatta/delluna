export const name="shield-warning-fill";
export const id="dl_8f0a4bc03cfc293e37d5";
export const url=new URL("../icons/shield-warning-fill.svg?v=ca6072e5e4b1b2205d7514b407913d62033ade5dca2d7daae6a2dd060ae75d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
