export const name="valve";
export const id="dl_a3dae5ff6bf9a96c7d44";
export const url=new URL("../icons/valve.svg?v=6a0ce7b456bf99ae4b3cd2682ebd50e84da6c55020c1377a76b7f06293bde60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
