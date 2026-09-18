export const name="tty-fill";
export const id="dl_9037ca7eda9c4c868d29";
export const url=new URL("../icons/T/tty-fill.svg?v=199b22d161c15c2ca549012a4faca9d3a4f0bdc2af170b342a599e409cf485ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
