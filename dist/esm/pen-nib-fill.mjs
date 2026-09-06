export const name="pen-nib-fill";
export const id="dl_1bc351bae41b467097d5";
export const url=new URL("../icons/pen-nib-fill.svg?v=e72f93917a62e549dbcf1c36ef82d2a16c816974dc2ae631e7d3c83ec0a035b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
