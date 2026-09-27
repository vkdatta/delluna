export const name="squares-subtract";
export const id="dl_478fb075120e4826b25d";
export const url=new URL("../icons/squares-subtract.svg?v=ff6c4e9fcba45c35ad72bfc862652c83e1430885c6b37945723f302304b77e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
