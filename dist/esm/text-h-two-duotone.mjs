export const name="text-h-two-duotone";
export const id="dl_8a3aa476b50749aaae64";
export const url=new URL("../icons/T/text-h-two-duotone.svg?v=8813a3e93f38fea9f41572d1ab9510a7a19b207bb3145ceefecae65be122350d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
