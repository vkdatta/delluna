export const name="bookmark_stacks-fill";
export const id="dl_6a3b6accb1284a9a8e4e";
export const url=new URL("../icons/bookmark_stacks-fill.svg?v=aff696032e7954e85e29e35b7ba66c5ae48642ae98c1a93e9ed2a924385d9b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
