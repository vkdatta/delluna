export const name="beer-stein-duotone";
export const id="dl_6bcbe20f702d419e97a4";
export const url=new URL("../icons/beer-stein-duotone.svg?v=da285858ce078a7fc82cabe990da585cfd14507bb9f3daaa1abfa87109bcd924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
