export const name="gamepad_down-fill";
export const id="dl_93375b0435332bbb21ee";
export const url=new URL("../icons/gamepad_down-fill.svg?v=32218ae9adbba475d04de5f25bf74379e47adcb6f84c790c3ac7c487b3431d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
