export const name="arrow-elbow-right-thin";
export const id="dl_9cbc81a5a19a4cffad7b";
export const url=new URL("../icons/arrow-elbow-right-thin.svg?v=eeb6c928c236cbca7820ef9e36b72d23d17f1867c0013559aef1204c24b08615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
