export const name="highlighter";
export const id="dl_291f1d30164541df9c95";
export const url=new URL("../icons/highlighter.svg?v=b96d379ba1bd92a88a1320ab3a4e2d99a299bd1979d3836ff527c1e707c11a07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
