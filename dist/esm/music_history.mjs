export const name="music_history";
export const id="dl_13c83bae080d9d7b6a1e";
export const url=new URL("../icons/music_history.svg?v=1b4588a46498b55ee2f451e7a54c0d9e0cc59abddca33a696ae19321be84d75b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
