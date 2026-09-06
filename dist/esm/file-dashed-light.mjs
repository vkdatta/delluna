export const name="file-dashed-light";
export const id="dl_e4c1bf731cd14b3ebd9b";
export const url=new URL("../icons/file-dashed-light.svg?v=639e35ecc3cf5de2b1dd5430295c73a60b4eafd7002ef8eb70fe139fc0be5388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
