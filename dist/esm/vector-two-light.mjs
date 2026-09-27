export const name="vector-two-light";
export const id="dl_c16c2542865cfa5a0983";
export const url=new URL("../icons/vector-two-light.svg?v=ef671d8cd7edbffcc21ac49db130e02cd3c63a710d25fbcccb0f2d09064faefc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
