export const name="hand-grabbing-duotone";
export const id="dl_f5aac34ba3e94b6cb1a4";
export const url=new URL("../icons/hand-grabbing-duotone.svg?v=5c0ae17af98849a0fdb5eb320783ad0b20892cbc7a0a209f2abdcbcb40144df6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
