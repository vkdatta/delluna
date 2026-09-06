export const name="git-diff-fill";
export const id="dl_2ebe964e0ce84bc89047";
export const url=new URL("../icons/git-diff-fill.svg?v=22f49244f04c176ed4d710026d92c4e58a541744cbda2fcffb7c68c0f52de480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
