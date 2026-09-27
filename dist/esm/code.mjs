export const name="code";
export const id="dl_6866cab24c5dfbb81a90";
export const url=new URL("../icons/code.svg?v=61332d3c4dc6e14f0ccbbc5991630c398bff38d2a966f992d7acd1aa1c8df9fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
