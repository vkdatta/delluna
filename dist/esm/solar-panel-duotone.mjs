export const name="solar-panel-duotone";
export const id="dl_0d677dd6af4615012e89";
export const url=new URL("../icons/solar-panel-duotone.svg?v=979d196527a8fa934b7204cf8c28f151d49b00935a5b3db93142a761fb827aa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
