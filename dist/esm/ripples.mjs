export const name="ripples";
export const id="dl_94f16aee120e9d606229";
export const url=new URL("../icons/ripples.svg?v=68c096512a5c6cdc82221d498875289f5d1bab14817bd8c7ba1ba3909130665a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
