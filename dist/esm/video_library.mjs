export const name="video_library";
export const id="dl_6da755eb58d4dcc11e65";
export const url=new URL("../icons/video_library.svg?v=ac10da83c528a66e50d96aaf474dbc3285696d607eac3acaaa75c139d526ba04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
