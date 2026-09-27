export const name="lucid_2-hand-platter";
export const id="dl_3baee45fa2eb492693f4";
export const url=new URL("../icons/lucid_2-hand-platter.svg?v=2a65bcfdd7da7b68df438eb68854bb344980851f6a1886e599738b9ca688b8df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
