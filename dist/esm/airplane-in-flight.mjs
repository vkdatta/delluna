export const name="airplane-in-flight";
export const id="dl_779ea1c2efd246919ae7";
export const url=new URL("../icons/airplane-in-flight.svg?v=768e9554f5520702f32e71f44234ca75cff946fdb71b9dcc3648844a96bc88d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
