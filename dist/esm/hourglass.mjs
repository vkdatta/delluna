export const name="hourglass";
export const id="dl_fd8cb74a330b48ca84a3";
export const url=new URL("../icons/hourglass.svg?v=fed8236215f226df32aa16a675d0875497242cb8e6b65418fadb0ba5c904124d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
