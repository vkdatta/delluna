export const name="not-equals-light";
export const id="dl_eaa51ca7a9884e9a9dc1";
export const url=new URL("../icons/not-equals-light.svg?v=c679fb58a0666b66230e89814e7bec700b9d211aa1083e45283b567785453ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
