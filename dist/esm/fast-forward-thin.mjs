export const name="fast-forward-thin";
export const id="dl_d345d1a9c5d54dee810a";
export const url=new URL("../icons/fast-forward-thin.svg?v=3b73f6e5953531e877db76fdb63a25407d5c581f17f71f9b5485080afb6c8d3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
