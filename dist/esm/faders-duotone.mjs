export const name="faders-duotone";
export const id="dl_4ad9ec034fdf42b9af71";
export const url=new URL("../icons/faders-duotone.svg?v=bc3a834984b61ef44b31cab821a7f58fae66ff787ab423fb25df26be09040532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
