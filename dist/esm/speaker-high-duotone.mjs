export const name="speaker-high-duotone";
export const id="dl_982532430708087596c4";
export const url=new URL("../icons/speaker-high-duotone.svg?v=df9b42e5af71a3f87a7588397ba9ad73f70133cbc1352e3f916ac8c2f380207b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
