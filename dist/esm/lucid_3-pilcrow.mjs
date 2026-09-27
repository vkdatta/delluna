export const name="lucid_3-pilcrow";
export const id="dl_0029b7486d3f4988b3cd";
export const url=new URL("../icons/lucid_3-pilcrow.svg?v=5374fc689ab90638fa8f2c9ecb56442691209f7a498365a83bd945257636233d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
