export const name="deck-fill";
export const id="dl_c2555dcdc8a90a13336f";
export const url=new URL("../icons/deck-fill.svg?v=fd71b312bb8681ca3cd0cea32819af4e573e4c36dfbcc6adfe3e2599cc0d6a9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
