export const name="bookmark-thin";
export const id="dl_30e737dba49c4dff8c49";
export const url=new URL("../icons/bookmark-thin.svg?v=01bd524e041110001b5b23a283680a97e68cf7b4e420c9ef89ee9b6b1ce27d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
