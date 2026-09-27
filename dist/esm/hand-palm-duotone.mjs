export const name="hand-palm-duotone";
export const id="dl_7374308e592e4869995c";
export const url=new URL("../icons/hand-palm-duotone.svg?v=2ee708ea5fce630f2fcadf266141b803c97bec0cfeecd1dac47d02962c5f2104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
