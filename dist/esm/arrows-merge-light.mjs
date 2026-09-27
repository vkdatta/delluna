export const name="arrows-merge-light";
export const id="dl_b60f4ffe56b4423fa185";
export const url=new URL("../icons/arrows-merge-light.svg?v=488e091a6ca78e3a666b7d464e42f888bed4ed2191d76c133b9e8406b06a46ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
