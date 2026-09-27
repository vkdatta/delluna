export const name="user-search";
export const id="dl_65af48716e4d4995b663";
export const url=new URL("../icons/user-search.svg?v=0f80ef339f2e65e5511253550a181745db0f201d6e747dde1fdc1dd418573058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
