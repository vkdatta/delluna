export const name="article-light";
export const id="dl_f8949f40795f46daabf7";
export const url=new URL("../icons/article-light.svg?v=214a183f8521a73abbaa899f49f8d6adb16eb8a08315b0280fd8eb165e59c629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
