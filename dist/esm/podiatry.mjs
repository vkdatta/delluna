export const name="podiatry";
export const id="dl_4a0a03090b836ed51f2e";
export const url=new URL("../icons/podiatry.svg?v=f29af1017ce3acbeff2bd1c1b4700328210b91033d224ae47ae0199e993ed9ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
