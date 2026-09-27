export const name="arrow-circle-down-right-duotone";
export const id="dl_0ba6300a803440bb8805";
export const url=new URL("../icons/arrow-circle-down-right-duotone.svg?v=00caed3ac48b36aeef8e1e739b9c6f7017eb1468cfdc5f62d6d4d101952194d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
