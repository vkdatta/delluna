export const name="lucid_3-mosque";
export const id="dl_1462941e6c1641e79ee2";
export const url=new URL("../icons/lucid_3-mosque.svg?v=d05653e779484350771a721051b550e8baa056098064ff40d029e89fc16d7e6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
