export const name="rabbit-duotone";
export const id="dl_2a473cc2fa0442dd97de";
export const url=new URL("../icons/rabbit-duotone.svg?v=3044bca0267c7eb0494c65ab21e9d175d385fa7ad799745ce64a7c7c7f7554c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
