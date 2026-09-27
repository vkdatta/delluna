export const name="eye-light";
export const id="dl_4ef7c109a7aa4be2a2c8";
export const url=new URL("../icons/eye-light.svg?v=d6e379ee121ebc7ca7b0a909163eb947dd6f9a0b963f96ed825917e0dc9c5e81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
