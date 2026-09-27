export const name="vector-three-light";
export const id="dl_025bbc76d9ebeb9b96fb";
export const url=new URL("../icons/vector-three-light.svg?v=e615cfbad6cf5a51321e16fa94fd5ecb0a899ca0bf1eee3a544b0f7a82ae922a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
