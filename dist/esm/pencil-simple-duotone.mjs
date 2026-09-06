export const name="pencil-simple-duotone";
export const id="dl_fc36b873025c444192c8";
export const url=new URL("../icons/pencil-simple-duotone.svg?v=03fa15e242468e14db0f279ddfc308bbb5c195af5b306680d37c4e26a86bed9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
