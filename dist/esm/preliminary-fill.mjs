export const name="preliminary-fill";
export const id="dl_9347af424be98736d77a";
export const url=new URL("../icons/preliminary-fill.svg?v=3dd3bba846d7b8272098743e4f1ec52bf38594a14c8a0e160d39d50aac73f28a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
