export const name="robot-light";
export const id="dl_75e8ec536f384c3ca508";
export const url=new URL("../icons/robot-light.svg?v=91355d9d1c94debcb516f2c4263fe780703e4278102691becaafd582ce8c1f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
