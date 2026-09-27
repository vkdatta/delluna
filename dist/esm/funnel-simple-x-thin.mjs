export const name="funnel-simple-x-thin";
export const id="dl_d0122efae63f49eb9c63";
export const url=new URL("../icons/funnel-simple-x-thin.svg?v=db8ae2ff74068bbd1f792bb1a1bc571f8c90d0b9e896e4467480623c9fff4884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
