export const name="door_front";
export const id="dl_1e1b488368b994f81ac8";
export const url=new URL("../icons/door_front.svg?v=a7b5002272dfc640a6208bc730c4846986d597ef91b15720454613f98fb61609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
