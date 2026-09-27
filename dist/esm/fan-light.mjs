export const name="fan-light";
export const id="dl_b304a558ac9f40809b07";
export const url=new URL("../icons/fan-light.svg?v=9774d39d721682c02de3a184a33ec04ee2257f2b4468401d948b8bb4819a33b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
