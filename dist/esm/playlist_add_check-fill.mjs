export const name="playlist_add_check-fill";
export const id="dl_2990e9d569281b8e91d2";
export const url=new URL("../icons/playlist_add_check-fill.svg?v=d1395b91888fc427e2818623c352422901bff31b665b90647ba6fb1e9ab54c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
