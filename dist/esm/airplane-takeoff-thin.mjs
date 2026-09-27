export const name="airplane-takeoff-thin";
export const id="dl_335695924eac4f38815a";
export const url=new URL("../icons/airplane-takeoff-thin.svg?v=5dc8ad144368ade466cbbb5f6160668dd05ced683c48824cbb38853f9e996e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
