export const name="schema-fill";
export const id="dl_74acab3b5bd7a706ca4a";
export const url=new URL("../icons/schema-fill.svg?v=93976025b30a4adf1b43dd88790493208231684a411a30700333b14903734ff3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
