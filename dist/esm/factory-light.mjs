export const name="factory-light";
export const id="dl_8d847f627bd141abac4c";
export const url=new URL("../icons/factory-light.svg?v=67ad408d14912cef53dcfeaf417ffc5f1f88dd0c06f4ac6b3e5d49235d44b6ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
