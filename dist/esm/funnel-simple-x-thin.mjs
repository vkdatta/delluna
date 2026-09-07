export const name="funnel-simple-x-thin";
export const id="dl_d0122efae63f49eb9c63";
export const url=new URL("../icons/funnel-simple-x-thin.svg?v=a5a12651006385e205a181574e742718269dccf6755b48753a83c2ad3b1eb1f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
