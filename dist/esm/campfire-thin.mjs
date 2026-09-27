export const name="campfire-thin";
export const id="dl_746eb4a6d79446e4bc47";
export const url=new URL("../icons/campfire-thin.svg?v=088208e52bf283dbc4652de5de64848f923072a328418d0c091da7cac5fd5088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
