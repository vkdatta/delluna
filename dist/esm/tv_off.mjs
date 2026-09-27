export const name="tv_off";
export const id="dl_6f595bfe9fd74ef64308";
export const url=new URL("../icons/tv_off.svg?v=932142fca6cbf254de341cae94235f7cabdf4bd59fa499b799ea2558f87676b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
