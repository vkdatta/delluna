export const name="lucid_1-circle-off";
export const id="dl_1908406c18dd488686ec";
export const url=new URL("../icons/lucid_1-circle-off.svg?v=925ab15ccdf794fa017ae09ca74ca7f667a4ca14b81b030200e850cb53ce0326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
