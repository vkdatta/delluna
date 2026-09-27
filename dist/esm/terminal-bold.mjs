export const name="terminal-bold";
export const id="dl_52c5be4bd3ed0199a39c";
export const url=new URL("../icons/terminal-bold.svg?v=d10d586749a8f4f04e03c08d834164fe85c9b565e09cb805e386a01df312cf2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
