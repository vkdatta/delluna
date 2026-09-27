export const name="health_cross-fill";
export const id="dl_d50477f28fe48c16bd97";
export const url=new URL("../icons/health_cross-fill.svg?v=99f8b0b46f0522c98aa856c80c4748c0c729ce5e99789792ef4714d174607e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
