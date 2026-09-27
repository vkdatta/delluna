export const name="list_alt_check";
export const id="dl_f443c8a4b67ce0d17a69";
export const url=new URL("../icons/list_alt_check.svg?v=9500be25e04a134b7f31598c44374e88ebf129e0e88b68239cc241079f2b771e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
