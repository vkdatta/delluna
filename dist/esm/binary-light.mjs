export const name="binary-light";
export const id="dl_45bab05fbe564c06bbc0";
export const url=new URL("../icons/binary-light.svg?v=7d4ad2e83b3b708421ff4d8982f3ffe95d0a4e0612ee250e10013b198d48cb20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
