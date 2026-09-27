export const name="crown";
export const id="dl_881bcbd2164d46ee96e8";
export const url=new URL("../icons/crown.svg?v=fcf298589183fa5d32474729f958139278a303256c49b4edd6418044eb6dbf0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
