export const name="lucid_2-heart";
export const id="dl_33e12c3fd90146d0b7e3";
export const url=new URL("../icons/lucid_2-heart.svg?v=43fe049b5cebe2e30a9f797f9f170d62d7ec7bcbd817a86a86a084e0d92f5ae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
