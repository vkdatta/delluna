export const name="rabbit-bold";
export const id="dl_afbd7c3ed6a24b47884e";
export const url=new URL("../icons/rabbit-bold.svg?v=5846df955e15c8113e5a5c84ae9cf28a810eb4f116e72311b1e6cab3165b0289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
