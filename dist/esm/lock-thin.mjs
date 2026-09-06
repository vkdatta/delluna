export const name="lock-thin";
export const id="dl_d2953198cff44555ac7c";
export const url=new URL("../icons/lock-thin.svg?v=4d2937cca2bac5ae73d873fe7dc2f1a1bec787d4e9c47ff0c4831b908ee33852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
