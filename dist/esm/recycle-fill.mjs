export const name="recycle-fill";
export const id="dl_654c3bee45984d9ea2d6";
export const url=new URL("../icons/recycle-fill.svg?v=a10d6d30f5dfe99f8d0f74ee60c0a6d8608157630a6541fa835d935e2eda8f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
