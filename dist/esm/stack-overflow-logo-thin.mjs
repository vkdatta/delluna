export const name="stack-overflow-logo-thin";
export const id="dl_da1bdf2a725ca438ab2e";
export const url=new URL("../icons/stack-overflow-logo-thin.svg?v=534d98cc4e8bac0840fa88861118c8fd3d28de7e5e53590dbd2a4d53c88c4fef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
