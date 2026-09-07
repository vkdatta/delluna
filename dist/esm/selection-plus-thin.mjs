export const name="selection-plus-thin";
export const id="dl_40c91448824741d1a981";
export const url=new URL("../icons/S/selection-plus-thin.svg?v=0b08ea97bfb4da64286f9e9ff088056e8893079b91d6d95b08c318cde87163a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
