export const name="pulse-bold";
export const id="dl_93330a621aa547128192";
export const url=new URL("../icons/pulse-bold.svg?v=f54ae3ef52df0ce0d9893cdd56520b6518d81689dd1131abf5a65481f8762023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
