export const name="user-square-light";
export const id="dl_d9c1f257d6544b21b4c1";
export const url=new URL("../icons/U/user-square-light.svg?v=d6404e2bab1e12ac8f9f96b6618f03396c465221895ab006fe576377ec4a7f58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
