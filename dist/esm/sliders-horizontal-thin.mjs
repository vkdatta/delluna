export const name="sliders-horizontal-thin";
export const id="dl_a95ca37d36b5460fae63";
export const url=new URL("../icons/S/sliders-horizontal-thin.svg?v=b47c4d16c4052fb34c76fed86ef1d62095ce43f62cfd6ed82a0b01b3bdb7ba12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
