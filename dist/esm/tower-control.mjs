export const name="tower-control";
export const id="dl_eb29323514254b62b183";
export const url=new URL("../icons/tower-control.svg?v=bd05fbaa03bcbfda7ed491d7364c00d987dd67559390390f3ed8a5164a740b26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
