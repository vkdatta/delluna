export const name="lucid_3-popsicle";
export const id="dl_9c29209e891a45c5a2f4";
export const url=new URL("../icons/lucid_3-popsicle.svg?v=86c005d8d4f45b2981d60dd0208c8e759f6f1a7616565f34f47937dc72b03a23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
