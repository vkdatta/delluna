export const name="delete_sweep";
export const id="dl_b66f6ab6a0e5024cc9dc";
export const url=new URL("../icons/delete_sweep.svg?v=e00bd14398d8d7bdf2d3ff2859a8a44d7d04dc1f9e17785ae3c2eb725a603cec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
