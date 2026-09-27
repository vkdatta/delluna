export const name="short_stay";
export const id="dl_cad97701f4326b8c150c";
export const url=new URL("../icons/short_stay.svg?v=05e9c7f222e71031d4c238556a435ca42d714f8f7bec0c4a80ad71c76068103d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
