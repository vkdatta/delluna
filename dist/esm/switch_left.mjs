export const name="switch_left";
export const id="dl_9ed7919367744d7ba52b";
export const url=new URL("../icons/S/switch_left.svg?v=1b00b8f047c357ade085cc6f1e5bef9323965c217ac0039a6d551ddfeb2f96f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
