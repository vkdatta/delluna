export const name="brush-fill";
export const id="dl_4fbde787182499f1714b";
export const url=new URL("../icons/brush-fill.svg?v=6cf95841ab89ac871cd1a1e4bf6f47c34fae0f0f6d06815a95b38a50d63543b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
