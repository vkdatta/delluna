export const name="arrow-elbow-left-down-duotone";
export const id="dl_6c5d7a1dd5f34eeca751";
export const url=new URL("../icons/arrow-elbow-left-down-duotone.svg?v=6f4a9e0a960822be12cca223246264d8b2b0bfa84d4f0734e64891d2705512b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
