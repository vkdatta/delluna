export const name="tooltip";
export const id="dl_5d23cd7fccec30ed4d71";
export const url=new URL("../icons/tooltip.svg?v=025a430c253441e79f285522eab64b548ab9db197354739259510a9937c8d8ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
