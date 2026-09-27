export const name="vinyl-record-duotone";
export const id="dl_fe8060967f8c24701c3b";
export const url=new URL("../icons/vinyl-record-duotone.svg?v=704b90e552eb09d3e1c938b25bc9eaaa19b7c5b9061e31680b7575cc8b0a935f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
