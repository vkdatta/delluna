export const name="japanese_curry-fill";
export const id="dl_eb8c481bc71646968f82";
export const url=new URL("../icons/J/japanese_curry-fill.svg?v=ec3e58769a6eeef2a736c0e125c26e38f312c88c574460d21052791629a159b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
