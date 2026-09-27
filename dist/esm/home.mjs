export const name="home";
export const id="dl_70da741ebf0d46489309";
export const url=new URL("../icons/home.svg?v=13b8b5ebf001ca775e4ce6c5af51252f14dad48d44ce660b33e8d7a8d31e32ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
