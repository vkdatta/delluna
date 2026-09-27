export const name="emergency_share-fill";
export const id="dl_7e62ba9c0bfb6ef5a32c";
export const url=new URL("../icons/emergency_share-fill.svg?v=13db1987c0574e0c2485dfb5c96020f909cb33d12ac138b817296a89cc3ce6dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
