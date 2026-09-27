export const name="assistant_device";
export const id="dl_a8d82a550b28146f65d5";
export const url=new URL("../icons/assistant_device.svg?v=072ae4116429aca14c9226a3d76ad792efdb44bbd092829ec935058ec0351402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
