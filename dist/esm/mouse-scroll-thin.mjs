export const name="mouse-scroll-thin";
export const id="dl_a20249440bd74a8d9b88";
export const url=new URL("../icons/mouse-scroll-thin.svg?v=76ab91d4090823a1b5d3d38b846a2ed398cb5473bdc27e8f84ce64335d9a0f63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
