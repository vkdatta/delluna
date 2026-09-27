export const name="dresser-thin";
export const id="dl_730accab3ec8471996cf";
export const url=new URL("../icons/dresser-thin.svg?v=3c0746b59014a9c05edbf1a19fe7be11f83bdbac79fcd8833b6a6e4b683e907b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
