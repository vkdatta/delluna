export const name="spatial_speaker";
export const id="dl_adf781da0446018bf9a9";
export const url=new URL("../icons/spatial_speaker.svg?v=fc415aa9a2e639a6e08558f686d8343454434f49e8e465fe93adbbbbbd0e73ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
