export const name="headphones-thin";
export const id="dl_edd5fab98776408e9414";
export const url=new URL("../icons/headphones-thin.svg?v=dd15eae43158f14cd93bd8757d453174cf3653785c7e4f007078205574d08c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
