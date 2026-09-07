export const name="terminal-fill";
export const id="dl_70afd12fc4d547dca66f";
export const url=new URL("../icons/T/terminal-fill.svg?v=9e2f83a87c43cef7a3f5bf8877a70fcf7877c45f6899edebce8886dc676312c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
