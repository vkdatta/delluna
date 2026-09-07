export const name="vector-two";
export const id="dl_8e18988c56e9440b8f80";
export const url=new URL("../icons/V/vector-two.svg?v=c8484a86b6dc0c980577b93d8ab5f25c3c4ea3a5e4bf574d9a7558841de14562",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
