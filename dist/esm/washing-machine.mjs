export const name="washing-machine";
export const id="dl_ea8ef86a827d4d9c8e99";
export const url=new URL("../icons/washing-machine.svg?v=3c596ef80fc75be89234eeed63fbedc132734c0bc5ff6ccce128e2b3ebfd645f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
