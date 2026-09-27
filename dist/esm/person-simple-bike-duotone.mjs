export const name="person-simple-bike-duotone";
export const id="dl_021456c2f5134545beb1";
export const url=new URL("../icons/person-simple-bike-duotone.svg?v=8b1276f803eaa4f3e069f9e43bc7c4d35f1899b5bc9e0ed7b1e94f853ed8e022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
