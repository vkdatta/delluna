export const name="video-conference-thin";
export const id="dl_c8301b3dbe9b48efab63";
export const url=new URL("../icons/V/video-conference-thin.svg?v=683712afa41f90d309bfe80ac91cb655c24d53cd560cb99e54403ff856a4733c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
