export const name="notebook-light";
export const id="dl_def21d63742a4d7c87ac";
export const url=new URL("../icons/notebook-light.svg?v=284f2b5380037071347a7b76085d254474c473090ea4001565efd762549c9b34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
