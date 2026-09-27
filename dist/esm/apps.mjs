export const name="apps";
export const id="dl_fcc2ca335c731b35c959";
export const url=new URL("../icons/apps.svg?v=a96c42392b3deddc1e77bb654138aaa4a68a7c54fa2b4814a1f762fe2094d8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
