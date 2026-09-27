export const name="lighthouse-thin";
export const id="dl_b30a12d89f094fd69501";
export const url=new URL("../icons/lighthouse-thin.svg?v=999bfc17e01916265f7195938b4b1810b57e85f3af2d0e1edf2af9f86bca9bfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
