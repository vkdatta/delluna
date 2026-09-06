export const name="cards-three-thin";
export const id="dl_92275f99e9ba40ce8aaa";
export const url=new URL("../icons/cards-three-thin.svg?v=3ac1b92e717d6c8166cb4bd25ec92558aea765d1440019f878d7af7347d901be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
