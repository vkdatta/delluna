export const name="math-operations";
export const id="dl_1aab9890953b49578748";
export const url=new URL("../icons/math-operations.svg?v=b2e38fb9deec3e0a0d422b8fd28ae15b97f8f2f387c2d8ec6ca5156deb4e6d89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
