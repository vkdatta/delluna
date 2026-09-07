export const name="magnet-straight";
export const id="dl_c85c792fd3b642cfb3b3";
export const url=new URL("../icons/magnet-straight.svg?v=3383a02e74fb8c7f487b939052185db04cdeccb16ad58d4b54e0108313704208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
