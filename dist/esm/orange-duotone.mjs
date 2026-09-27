export const name="orange-duotone";
export const id="dl_58dca6f9e1cc437aaf99";
export const url=new URL("../icons/orange-duotone.svg?v=c7d3ca011ff71b255f8e3dfe7821e6e28469e104fb54402c3e1e865f925c9607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
