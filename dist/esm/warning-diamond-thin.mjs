export const name="warning-diamond-thin";
export const id="dl_27d808929b49bf136bc9";
export const url=new URL("../icons/warning-diamond-thin.svg?v=e92650eed7990fca608c53a17687074c7cb5d6a7e7a41f906d3d46efb8cfc4c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
