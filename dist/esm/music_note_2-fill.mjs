export const name="music_note_2-fill";
export const id="dl_546356737bdd452ebeec";
export const url=new URL("../icons/M/music_note_2-fill.svg?v=967bfcbd213209685cf4b13d70f8e8f03499db7931ab3b6e1fd3857349e60d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
