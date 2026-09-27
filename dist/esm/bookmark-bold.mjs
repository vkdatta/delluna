export const name="bookmark-bold";
export const id="dl_47519137c3354f3ca618";
export const url=new URL("../icons/bookmark-bold.svg?v=d7ec8182a9f25db427daa467b6cd147e18d14b7ccc516a707e87fa3aa35988f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
