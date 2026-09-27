export const name="monitor-play-light";
export const id="dl_53fcf540e8974fdfafa0";
export const url=new URL("../icons/monitor-play-light.svg?v=5fa041ea5eb310511faea28c4d7044e6af23d238396e4dcb2627b2802d3d940c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
