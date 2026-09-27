export const name="thumbs-down-light";
export const id="dl_56032b56ced24cda47c6";
export const url=new URL("../icons/thumbs-down-light.svg?v=d40f8b0f6b285aa7016d33457a306a6e2008851fb9c41c5cdb03d1be9f9327a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
