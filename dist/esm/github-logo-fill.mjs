export const name="github-logo-fill";
export const id="dl_2438f7e4234e43ecb9f7";
export const url=new URL("../icons/github-logo-fill.svg?v=35b2036490005bcb95a68d07d43d441ae585c6c6dde0e902bb3daf0ddbc615b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
