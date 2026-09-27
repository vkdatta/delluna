export const name="lucid_1-circle-user";
export const id="dl_10201d386cbf4cce9a4b";
export const url=new URL("../icons/lucid_1-circle-user.svg?v=184fd8eb8778d07e415ef8584b0a029204af265756214f3f9524be85e913a98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
