export const name="scribble-fill";
export const id="dl_88ed3b47cbef4622b336";
export const url=new URL("../icons/S/scribble-fill.svg?v=0c543149523e083f28b5b034abcd4201f3b35b8b644c675efde7c28844696236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
