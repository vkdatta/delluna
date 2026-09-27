export const name="checks-duotone";
export const id="dl_48b779549dd34db7997e";
export const url=new URL("../icons/checks-duotone.svg?v=5b1108e548b8ba24e5464216f64f568df3e218674dccf6f7eed68a7f986bc493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
