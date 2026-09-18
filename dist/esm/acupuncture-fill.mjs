export const name="acupuncture-fill";
export const id="dl_d490789cd8b448c6bd89";
export const url=new URL("../icons/acupuncture-fill.svg?v=a51cc1bb85f3cdf980656053dc88755e7bbd07b9e93f4d0361928d9eecd99fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
