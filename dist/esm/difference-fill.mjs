export const name="difference-fill";
export const id="dl_f8ab6b982b703d28dd27";
export const url=new URL("../icons/difference-fill.svg?v=90209405c91339a740c454ef1aac21ddd1974f828e4a9490608b2452ffa49d8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
