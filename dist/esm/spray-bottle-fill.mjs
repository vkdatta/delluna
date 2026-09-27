export const name="spray-bottle-fill";
export const id="dl_86e1c79d65e3b9bdaf46";
export const url=new URL("../icons/spray-bottle-fill.svg?v=88d28d85646cab30db2ea1b5f469077eedc373fb36a485e39626bcf37c7d9927",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
