export const name="stack-overflow-logo-duotone";
export const id="dl_39febcd2e6634b9899d7";
export const url=new URL("../icons/S/stack-overflow-logo-duotone.svg?v=b8242b770102ee8f2745eaad42ef03fcc98f607b6c9ff7e24986f88c764b1aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
