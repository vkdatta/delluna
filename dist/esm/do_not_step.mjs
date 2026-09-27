export const name="do_not_step";
export const id="dl_c85121021ebf9f349d61";
export const url=new URL("../icons/do_not_step.svg?v=cf6e19991c533f2fe43101099fed1ffee543c8e17ff1ad3e75073cdd867a3656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
