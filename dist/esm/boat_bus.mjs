export const name="boat_bus";
export const id="dl_6c08e09104023bc79c2c";
export const url=new URL("../icons/boat_bus.svg?v=f537627a0a65c7069e749d73f9d03f8165d191806244124fb7490766f019cab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
