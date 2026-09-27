export const name="lucid_3-moon-star";
export const id="dl_e8108b90f36b4802a2fb";
export const url=new URL("../icons/lucid_3-moon-star.svg?v=a8eff47e20c6de2939559756e77e8058ca5279c3f02c827a8c62b3fe8a26ee7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
