export const name="language-fill";
export const id="dl_2f07eee263a824c148fa";
export const url=new URL("../icons/language-fill.svg?v=6c866b3bc4df0d71163b3e5cc569ed216fa696b7eb5dbe5efb309385442403d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
