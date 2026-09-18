export const name="ink_highlighter_move";
export const id="dl_223753a9ac8248f28675";
export const url=new URL("../icons/ink_highlighter_move.svg?v=af97d44605c509c7b317f45c3f23d7762e0af8600ed23e7a2455b1799123cefb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
