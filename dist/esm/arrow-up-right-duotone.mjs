export const name="arrow-up-right-duotone";
export const id="dl_084b2cf640f045f4a194";
export const url=new URL("../icons/arrow-up-right-duotone.svg?v=39e7e2d2145010f2850f4a5b7bbc250a7341d28ad2a103ed7eec9f3cec407baa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
