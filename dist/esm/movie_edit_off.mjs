export const name="movie_edit_off";
export const id="dl_877625547d250ae94cdb";
export const url=new URL("../icons/movie_edit_off.svg?v=8cc6b4fc31e9aa17e834e77a86fa2f7b20f41c09b223f83e09fc5ccc5b5fe1ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
