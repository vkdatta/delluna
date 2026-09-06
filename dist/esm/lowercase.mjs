export const name="lowercase";
export const id="dl_26321b83f73cced823cb";
export const url=new URL("../icons/lowercase.svg?v=fb84dc7b5d8d216094e08dfeb78187763bba7e095a64bf86ed823b58a05a240a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
