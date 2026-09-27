export const name="equal";
export const id="dl_9a43a84085f451945157";
export const url=new URL("../icons/equal.svg?v=c88719ced2ffcf412bece143326d1ba00ae5e786863b558db5966200358fcbfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
