export const name="exclamation-fill";
export const id="dl_3fd1c3905b7f27f3706b";
export const url=new URL("../icons/exclamation-fill.svg?v=705134fa81d6b7018566e93356151e7c1fe417ba5f779cf80c31fab2ff3f12b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
