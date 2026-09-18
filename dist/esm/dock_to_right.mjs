export const name="dock_to_right";
export const id="dl_377253c5c69a4ff29fff";
export const url=new URL("../icons/dock_to_right.svg?v=f62154d75e46b4286287a2be70c2800677db81b8e206286261a456717f14fd95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
