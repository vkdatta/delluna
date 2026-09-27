export const name="arrows_up_down_circle";
export const id="dl_fd4e7e0bab287286fa69";
export const url=new URL("../icons/arrows_up_down_circle.svg?v=4ace2c27b113147bbc354424134ab375a5151476c39008a92f3d44330114045f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
