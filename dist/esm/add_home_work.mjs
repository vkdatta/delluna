export const name="add_home_work";
export const id="dl_0337d7cb470df2c1dc4e";
export const url=new URL("../icons/add_home_work.svg?v=95393e1739cb8b0fe3c10f2e34b285a19f415dfe3d0d274ec1d6f730eb763de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
