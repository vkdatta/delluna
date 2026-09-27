export const name="running_with_errors";
export const id="dl_ddeb4d443fef59fa4595";
export const url=new URL("../icons/running_with_errors.svg?v=58063095249ab123d13e2213a84af862ddbc95dc47c9199dd95b76dbe7a185f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
