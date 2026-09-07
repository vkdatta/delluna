export const name="battery-medium-bold";
export const id="dl_550ed7df7dd34d6cbb2a";
export const url=new URL("../icons/battery-medium-bold.svg?v=faafc2af47fe323fc6d29734215667022a1a5a5f49ba672abafe4bf1bc6bae6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
