export const name="acorn-fill";
export const id="dl_4ea7de7bf54b4a0d81bd";
export const url=new URL("../icons/acorn-fill.svg?v=7e728648473918f03f7d6b920a074e383c02d5444ee81dae768c9c085604ea5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
