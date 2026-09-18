export const name="local_car_wash";
export const id="dl_c7a9bd44167e47bc9cc8";
export const url=new URL("../icons/L/local_car_wash.svg?v=7d4d4eb656365be858326cd8d820577132b7c5bb825b6ac04e27835b6cf44e2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
