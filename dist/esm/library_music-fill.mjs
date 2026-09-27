export const name="library_music-fill";
export const id="dl_357bf1d46e4f3a84aecd";
export const url=new URL("../icons/library_music-fill.svg?v=da0ed0211ae51ebb0c29271fed29e98ad8ee4a42ca5dfe5da0e768f9ac5af03d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
