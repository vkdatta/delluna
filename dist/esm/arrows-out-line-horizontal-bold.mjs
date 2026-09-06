export const name="arrows-out-line-horizontal-bold";
export const id="dl_8f98f9326af24673824b";
export const url=new URL("../icons/arrows-out-line-horizontal-bold.svg?v=278ff4e8fd05a855e973ef49b82af25ddbe38b4dbea0f9b919e28e2c17873248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
