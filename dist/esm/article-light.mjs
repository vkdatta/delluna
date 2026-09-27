export const name="article-light";
export const id="dl_f8949f40795f46daabf7";
export const url=new URL("../icons/article-light.svg?v=aab8b732a018e1a1c88b7102685f36404872ed89abdc002abe76ff414c6f94ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
