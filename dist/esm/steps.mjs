export const name="steps";
export const id="dl_203ef0155ce6413099b7";
export const url=new URL("../icons/S/steps.svg?v=69cf149c8118bfca5043b2ea111da962b52895c10e023ee31a03d911681f5a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
