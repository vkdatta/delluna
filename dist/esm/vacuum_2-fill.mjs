export const name="vacuum_2-fill";
export const id="dl_69be8217b55359944b35";
export const url=new URL("../icons/vacuum_2-fill.svg?v=f2e8647c95bb77b9cf1b0b7dc539f6d0d2dc864a0eb8edecd596da1a3a3b249e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
