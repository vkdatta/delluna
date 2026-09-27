export const name="caret-double-up-duotone";
export const id="dl_65d567bfc22f456996d4";
export const url=new URL("../icons/caret-double-up-duotone.svg?v=c7d92e9b3f93c650d42558c2a81a4c94e9d56b51d87ada65e60f29abbb069a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
