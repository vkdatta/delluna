export const name="dangerous-fill";
export const id="dl_0eb8e48c758a5ef1ec81";
export const url=new URL("../icons/dangerous-fill.svg?v=bb57b92d163b554fb3e3ed2dc0adaea62b4062af8bb5cdd04d85e9327681dc78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
