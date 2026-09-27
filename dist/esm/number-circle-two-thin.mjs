export const name="number-circle-two-thin";
export const id="dl_36502450d836454a81c6";
export const url=new URL("../icons/number-circle-two-thin.svg?v=3b90861f384fc486b76d94b9b3fab769aa46917f025fdcc10f60b9e2b2b5f7c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
