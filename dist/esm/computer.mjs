export const name="computer";
export const id="dl_7fcd89e7a73872d76810";
export const url=new URL("../icons/computer.svg?v=2bbbe1b98ddd164cdfde4030e3ab0cd86089cc98318963beb88ae7cfe144e263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
