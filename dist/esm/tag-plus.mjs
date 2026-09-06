export const name="tag-plus";
export const id="dl_b547a71f3b314c4cb2d5";
export const url=new URL("../icons/tag-plus.svg?v=bf00e2731f9b0e21b5c71294cc7da251c93baeef5bee99b83b2430a4c680010e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
