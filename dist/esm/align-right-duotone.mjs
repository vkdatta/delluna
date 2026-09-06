export const name="align-right-duotone";
export const id="dl_d598bd3daa554aba94d3";
export const url=new URL("../icons/align-right-duotone.svg?v=b63d8a656f7859edcbdde8c6bead6f95b0c1e39435d3521f2a88196c9540af18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
