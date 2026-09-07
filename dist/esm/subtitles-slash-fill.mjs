export const name="subtitles-slash-fill";
export const id="dl_1668975d36b647e288b4";
export const url=new URL("../icons/S/subtitles-slash-fill.svg?v=e7285af24090f2016400bf083a3ec9e665c69571d1a46dc05b1deef07ad1d253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
