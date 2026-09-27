export const name="home_mini-fill";
export const id="dl_6bf139c93dde81a00ca1";
export const url=new URL("../icons/home_mini-fill.svg?v=f6abe8327a0e0900bdd60f32d91876a329b515e176ce2a0e9e99e2875abebfce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
