export const name="columns-plus-left-thin";
export const id="dl_56f1322c488e48abba42";
export const url=new URL("../icons/columns-plus-left-thin.svg?v=4acbd290d1da2cb64af855d19710edda32fcda44b7c42722fceff2f5aef055f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
