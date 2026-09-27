export const name="arrow-elbow-left-bold";
export const id="dl_7067c002a6cc4b80bf7b";
export const url=new URL("../icons/arrow-elbow-left-bold.svg?v=252bdc82a4093f30f21c98411646a3f8ded18434b8d4e117e24a15511e7db819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
