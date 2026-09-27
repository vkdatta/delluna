export const name="tree-palm-bold";
export const id="dl_a4f7e0ae5847221fa2a2";
export const url=new URL("../icons/tree-palm-bold.svg?v=df9dbb5ea22d7f8987c59de9ba4d8aaef267374d83eff978d17fc3ed35cea1c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
