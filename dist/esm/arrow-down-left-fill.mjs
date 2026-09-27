export const name="arrow-down-left-fill";
export const id="dl_9656e0b411684a17be08";
export const url=new URL("../icons/arrow-down-left-fill.svg?v=91bc607938afd2c754b0dd44750fd123169382890d8f9ba1fdeba158df1e36f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
