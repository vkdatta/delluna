export const name="potted-plant";
export const id="dl_71e4f1dee9864ee4be6a";
export const url=new URL("../icons/potted-plant.svg?v=ca4fd359a6a9f8b81bbb075307e2f4fcbf8b22b9f84c1935eefc3ad28e81930f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
