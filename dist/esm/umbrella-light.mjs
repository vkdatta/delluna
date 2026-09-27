export const name="umbrella-light";
export const id="dl_9700496aab284fdf4c35";
export const url=new URL("../icons/umbrella-light.svg?v=20ce066c3f481719a081cb3f094227a559973336dd3328371bae3b65a01f04d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
