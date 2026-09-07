export const name="download-light";
export const id="dl_2e10340e952c4527bb13";
export const url=new URL("../icons/download-light.svg?v=33dd3008900ecfe4a557dfc65f92960d60ae6312c2a59030b26242954bd19cef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
