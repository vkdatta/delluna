export const name="building-office-light";
export const id="dl_36fa9e2cb0c84667aa4e";
export const url=new URL("../icons/building-office-light.svg?v=897c3345a8dc04a7ec744ba868b53a9b1cd5830d46df689919e105d911e6645f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
