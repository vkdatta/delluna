export const name="computer-fill";
export const id="dl_142075a7fafd48d294ba";
export const url=new URL("../icons/computer-fill.svg?v=94091658d0f3e831624020eca61ca2d045283e0db5ea39457c50b23a8ea2ee7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
