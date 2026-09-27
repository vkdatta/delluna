export const name="markdown_paste-fill";
export const id="dl_07bc5ed736702d5ca27b";
export const url=new URL("../icons/markdown_paste-fill.svg?v=47d6fda8e2da21d0beaf4cbcdee9b89d3fda4e7ac3c75652cea69e9a0dec570a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
