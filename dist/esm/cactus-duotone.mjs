export const name="cactus-duotone";
export const id="dl_f827b861e9e441338301";
export const url=new URL("../icons/cactus-duotone.svg?v=c71c2a1faafb49b6ee42dbefd3c6eb4b1f18c690b39707ac7e38199fba7ec2f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
