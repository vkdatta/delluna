export const name="trending_up";
export const id="dl_0bc9a6c5774144b584d5";
export const url=new URL("../icons/T/trending_up.svg?v=4ca6ff267bea0f94b93678bf473e8f9f46edd41995e36abf926818cbbcfd4cc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
