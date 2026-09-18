export const name="phone_paused";
export const id="dl_8fd5301f8bad4599b90f";
export const url=new URL("../icons/P/phone_paused.svg?v=b44efe3de3710894d03640af781cf8aee2c870fbaf5afb93cd657702c3709034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
