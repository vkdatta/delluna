export const name="snowboarding";
export const id="dl_9bdf216ace1967cb9b3e";
export const url=new URL("../icons/snowboarding.svg?v=f05739d19d331ebe4062d64ef538737ccacbaac16ef998291c6c3137787f8db9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
