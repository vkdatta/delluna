export const name="first-aid";
export const id="dl_e142d882f389476885f5";
export const url=new URL("../icons/first-aid.svg?v=392bc7b50f6b31e363364a2189a3a73688a5032335d4184a20685b3c9ea37de4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
