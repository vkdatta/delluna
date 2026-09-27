export const name="step-back";
export const id="dl_c11160e18e514669b9f3";
export const url=new URL("../icons/step-back.svg?v=ab612e5b0edb2fd78be7980bf1cdfe0fdd7d613449a15669250142cd5362d34d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
