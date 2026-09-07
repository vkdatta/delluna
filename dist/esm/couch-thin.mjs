export const name="couch-thin";
export const id="dl_824f3f7a570d4f549566";
export const url=new URL("../icons/couch-thin.svg?v=fc07aaea984cd3b3b376639300425743fd87f9ada023a8eb7ff8956a54d9092c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
