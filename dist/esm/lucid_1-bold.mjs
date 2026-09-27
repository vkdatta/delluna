export const name="lucid_1-bold";
export const id="dl_7d53a4bd28d944b7b715";
export const url=new URL("../icons/lucid_1-bold.svg?v=7cbbf1e30f686f27058d6572325d3931c31239c465be6b27a06813de137e48ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
