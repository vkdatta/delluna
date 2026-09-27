export const name="expand_stack";
export const id="dl_76348e934220bc42e0ed";
export const url=new URL("../icons/expand_stack.svg?v=7528d4e72f56e6cb0aadfd5c6a9f94ce28287153d1c694a10909777f831020ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
