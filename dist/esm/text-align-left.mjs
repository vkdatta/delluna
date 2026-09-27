export const name="text-align-left";
export const id="dl_7b00de5d2765df631a83";
export const url=new URL("../icons/text-align-left.svg?v=95230a1ade4ca02b86e4ea404b3e6cb8a43fabf2f2f77c7673cc38fbd0387551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
