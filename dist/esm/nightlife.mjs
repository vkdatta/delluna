export const name="nightlife";
export const id="dl_ad0ecefb6a9faace9e46";
export const url=new URL("../icons/nightlife.svg?v=c4d29e20179bff7a5c0c0765c832c594b8c629a28a823eeca3ea949f917db1ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
