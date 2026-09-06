export const name="article-medium";
export const id="dl_5779a6bdd06d4e8faa24";
export const url=new URL("../icons/article-medium.svg?v=d0961ccf0842de3b16a00cc9d193aac9eee90eefd717c99f1decab57aa19b18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
