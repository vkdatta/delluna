export const name="campfire-thin";
export const id="dl_746eb4a6d79446e4bc47";
export const url=new URL("../icons/campfire-thin.svg?v=bd49b4eb7e70f73f4672b0733eee59c04683e01a7a45457544daa72d576d8654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
