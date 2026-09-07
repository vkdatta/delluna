export const name="columns-plus-right";
export const id="dl_06b7601b71154008bd29";
export const url=new URL("../icons/columns-plus-right.svg?v=46b70c5021cea725b8b076872793b72a99c609a0affbb891fd0a74f296095eb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
