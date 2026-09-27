export const name="sentiment_worried-fill";
export const id="dl_15ef5a92e3e31d0c726b";
export const url=new URL("../icons/sentiment_worried-fill.svg?v=e38dfdf3b80b2ce13bbb6f5bd334790f936cb07357f2647f07ac8d7fe47ce306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
