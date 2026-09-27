export const name="looks_5-fill";
export const id="dl_9ee0bc9104af29ad8262";
export const url=new URL("../icons/looks_5-fill.svg?v=fec8edae6885429b6b0f1f3a68f313cab92f93f20ebfc1bf019d9d3a31cbf2cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
