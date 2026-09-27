export const name="align-top-light";
export const id="dl_2448418899384996a1d8";
export const url=new URL("../icons/align-top-light.svg?v=431e6f55e401bb2d886ba0f7c633484455ab2f50546ad9f206b6231025113891",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
