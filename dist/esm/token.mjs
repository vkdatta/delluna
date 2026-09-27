export const name="token";
export const id="dl_20bad2f7bc2679b3d1e6";
export const url=new URL("../icons/token.svg?v=a5262064e3b9fff5f31b3c7a9c1109ff4d9c73f180292c4ccc9a59d2013607f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
