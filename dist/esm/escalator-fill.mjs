export const name="escalator-fill";
export const id="dl_47753de5c131ce062026";
export const url=new URL("../icons/escalator-fill.svg?v=fb352ee8975663917aabe9320832a78513ee47eadde0551a829c85d0e23ac237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
