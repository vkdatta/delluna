export const name="pencil-circle-thin";
export const id="dl_0f54d8b9d39d47e39e05";
export const url=new URL("../icons/pencil-circle-thin.svg?v=f810c4fff584e262b1d3d8a0e92196e79afaac5f6e4f9bfa89ecde389402e1c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
