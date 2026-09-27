export const name="bomb";
export const id="dl_ee822b2b84e448a094d1";
export const url=new URL("../icons/bomb.svg?v=7ac70a86b7355091778cf7443e579b58f3d8476baad61b1f056b1f6a29737e1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
