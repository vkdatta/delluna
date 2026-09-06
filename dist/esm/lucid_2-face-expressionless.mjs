export const name="lucid_2-face-expressionless";
export const id="dl_13772af748a944cba8b4";
export const url=new URL("../icons/lucid_2-face-expressionless.svg?v=2dd198c7e08746e988705ee251e9b462b5715e31835751a8b5eca94d537b5f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
