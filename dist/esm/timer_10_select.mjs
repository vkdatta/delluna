export const name="timer_10_select";
export const id="dl_1369aaa2e511f26dcd49";
export const url=new URL("../icons/timer_10_select.svg?v=e28255b39c7d993e5dd0c777cb0cb7e9ec01029b96fc105471872e0e87792f40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
