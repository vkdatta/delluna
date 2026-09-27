export const name="info-duotone";
export const id="dl_e79bd17c2ab442eb826f";
export const url=new URL("../icons/info-duotone.svg?v=bf72ae0830919ef6bbb10dac845a03a19cf6d0184b5b92a1a0763de22f598d06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
