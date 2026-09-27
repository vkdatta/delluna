export const name="flying-saucer-light";
export const id="dl_56b223a73a3d471f8c37";
export const url=new URL("../icons/flying-saucer-light.svg?v=3e709f0bbabded89f96d460b75b450af59e179b0e2aea1ccd3a44bbd5338c080",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
