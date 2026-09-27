export const name="baseball-helmet-fill";
export const id="dl_f36c3ececa6b4ecb9e12";
export const url=new URL("../icons/baseball-helmet-fill.svg?v=de47460b9914ef4bfdde10381bd5776ad895f6e929276dd98118eaa32723e937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
