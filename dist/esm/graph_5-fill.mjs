export const name="graph_5-fill";
export const id="dl_d20c63dcf848ba5d2742";
export const url=new URL("../icons/graph_5-fill.svg?v=f2356c857581b16bb01741a95290d29d599d341d80221fb0a795c3e3c3799d8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
