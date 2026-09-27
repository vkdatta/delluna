export const name="lucid_2-film";
export const id="dl_be504034fc8642a28af5";
export const url=new URL("../icons/lucid_2-film.svg?v=940dfe59eb00afe6c4ff3bbcdcf67998ee432b4c5c80420ce289e0750ecf190f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
