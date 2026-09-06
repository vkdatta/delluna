export const name="lucid_2-hand-platter";
export const id="dl_3baee45fa2eb492693f4";
export const url=new URL("../icons/lucid_2-hand-platter.svg?v=9e87abc48f2ce6b5e55f68075b231239368fefa2161e8fc827f1c21adb00a0c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
