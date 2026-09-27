export const name="arrow-left";
export const id="dl_9d9b8d4d5cca47ab8649";
export const url=new URL("../icons/arrow-left.svg?v=3bba5aca7bde83768b3a0fed97e2ae678143b3183f80b4a1511292b7470de7ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
