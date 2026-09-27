export const name="paid";
export const id="dl_81c2505bfced01cf4104";
export const url=new URL("../icons/paid.svg?v=e2a61e8f6a2a211ddb521b4606e50cc97375d945ced5a6b2ff082fbb66beb16d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
