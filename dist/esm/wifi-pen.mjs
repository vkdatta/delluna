export const name="wifi-pen";
export const id="dl_06f024b2770d4a2a9e47";
export const url=new URL("../icons/wifi-pen.svg?v=afbe9a15e38f31e07e04d20878ab796d6038624c7f16397a8fc9b37bb22dd3e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
