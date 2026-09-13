export const name="13mp-fill";
export const id="dl_fa262f02293b45c3a40f";
export const url=new URL("../icons/1/13mp-fill.svg?v=287278bf73e16d46a0f3ae18264ec84098acb9e075fa502a527cb95bef99d117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
