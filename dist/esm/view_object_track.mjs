export const name="view_object_track";
export const id="dl_9d03895d1d654a30e5cc";
export const url=new URL("../icons/view_object_track.svg?v=4de81ae0df1aba3f5b7ba1baa1702fd9d3c509e5fe6fc97ade0bd526fadb2856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
