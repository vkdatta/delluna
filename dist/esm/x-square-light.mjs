export const name="x-square-light";
export const id="dl_dd224c952cb7f43c8c80";
export const url=new URL("../icons/x-square-light.svg?v=df2f319264564faccabe7c1f46953473a85dc7a2d69315f77f73f7435b880a59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
