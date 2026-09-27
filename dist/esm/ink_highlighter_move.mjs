export const name="ink_highlighter_move";
export const id="dl_d741c0704002db77c51b";
export const url=new URL("../icons/ink_highlighter_move.svg?v=487068f9676a7486d66579ab1113bf8347cc8ec31f6dc208d2e49f204590e4a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
