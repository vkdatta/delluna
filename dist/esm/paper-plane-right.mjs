export const name="paper-plane-right";
export const id="dl_8c3b57a08cab449dbfff";
export const url=new URL("../icons/paper-plane-right.svg?v=1c1932e063ac2f20bd86753f59baccd8f9aebb86e5933ef08bc2b29f59143e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
