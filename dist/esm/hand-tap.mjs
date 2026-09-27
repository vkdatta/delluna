export const name="hand-tap";
export const id="dl_5a63b5946202445f9e1c";
export const url=new URL("../icons/hand-tap.svg?v=454f91cb041d25fe3babf7eecf58c69f13bdfda60b227f4f8055915d5edb6306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
