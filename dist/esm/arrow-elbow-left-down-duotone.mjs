export const name="arrow-elbow-left-down-duotone";
export const id="dl_6c5d7a1dd5f34eeca751";
export const url=new URL("../icons/arrow-elbow-left-down-duotone.svg?v=5ecd2695a10c3392cf8dcb75178d72f8053e63cb75bffe2a741a3dc97a62c234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
