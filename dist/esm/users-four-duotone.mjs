export const name="users-four-duotone";
export const id="dl_7c31f66adef1a7ebd3c3";
export const url=new URL("../icons/users-four-duotone.svg?v=e80d44524aab6a0283ff0cd0ecbc1a39e3154ef4a28b6ca56a18fd6a7d629a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
