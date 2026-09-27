export const name="standard-definition-light";
export const id="dl_ad44c5dcb64790da91cc";
export const url=new URL("../icons/standard-definition-light.svg?v=d68e1e56b73be87e17e9d3e04e6aa2739432cc48d626c322e410219a89d2076d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
