export const name="anchor-duotone";
export const id="dl_b872265cea524382888c";
export const url=new URL("../icons/anchor-duotone.svg?v=621509ab88dfd18743b7336244bdff1bb522665d4dd790f47665b573ce7435c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
