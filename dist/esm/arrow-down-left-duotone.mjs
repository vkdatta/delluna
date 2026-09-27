export const name="arrow-down-left-duotone";
export const id="dl_1d545367ac1c48b99e2d";
export const url=new URL("../icons/arrow-down-left-duotone.svg?v=998a146f451b9d36e8e87e8f143b53894976cd3da7232b8d61cf998a84116092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
