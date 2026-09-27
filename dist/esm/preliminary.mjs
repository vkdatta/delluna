export const name="preliminary";
export const id="dl_9c38513d00dea7aaf70a";
export const url=new URL("../icons/preliminary.svg?v=eaad722a9abcd85335d8afc67b1d994e1c6b22de048f7755f3a5db46997ebe57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
