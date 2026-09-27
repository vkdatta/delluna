export const name="split-vertical-light";
export const id="dl_5d51dd5ff519c9b24a76";
export const url=new URL("../icons/split-vertical-light.svg?v=088ef6aa891cbcad19bbd938f55323fc00f1a40f568ab477b1f200af17d6e7c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
