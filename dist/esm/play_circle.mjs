export const name="play_circle";
export const id="dl_871c21a65e0a89757c36";
export const url=new URL("../icons/play_circle.svg?v=e49beb9049f0694ebc56c684ed8fda5d867c57b13fb6419bf46260ad3a4ab233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
