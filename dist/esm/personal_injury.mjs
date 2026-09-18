export const name="personal_injury";
export const id="dl_295e432d98f0433895c9";
export const url=new URL("../icons/P/personal_injury.svg?v=c0e84fdd6d6b05dc1e27d615e9fa57fb13dd5350f0d5d5be8ed86f346cca54ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
