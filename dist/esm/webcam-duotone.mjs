export const name="webcam-duotone";
export const id="dl_22bd52702cf345eb8c9f";
export const url=new URL("../icons/W/webcam-duotone.svg?v=596708d8e00130f46b0c3eac46ec9cd88b83d3b69d2542077489b6039920be91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
