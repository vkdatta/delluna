export const name="mouse-left-click-fill";
export const id="dl_515cc5c90ef44845aae5";
export const url=new URL("../icons/mouse-left-click-fill.svg?v=2d39418c49fbb61b7ad17e73ec98c8bfd77c75c257b317fc17e02f10e40fedce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
