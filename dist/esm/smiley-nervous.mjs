export const name="smiley-nervous";
export const id="dl_431b975cc923bb4e0a94";
export const url=new URL("../icons/smiley-nervous.svg?v=2484a054250f45c03d4dc66ab8d3341ba193d58493eadb59f83497bf192fcf7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
