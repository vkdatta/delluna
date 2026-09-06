export const name="arrows-in-simple-duotone";
export const id="dl_56700416015a41a2a71f";
export const url=new URL("../icons/arrows-in-simple-duotone.svg?v=84f5a9c47271a15aaa4d683827b143b079d5f89ab9a3ab71c36d3b52447d1e0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
