export const name="expand_circle_down-fill";
export const id="dl_95cb43c3a29aea5cae05";
export const url=new URL("../icons/expand_circle_down-fill.svg?v=0fa7147bd400b4b0c62c9fcfd837e56352242af64854cd66b60714e2374f2016",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
