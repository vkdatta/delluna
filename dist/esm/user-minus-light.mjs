export const name="user-minus-light";
export const id="dl_4407a037b043429d9058";
export const url=new URL("../icons/U/user-minus-light.svg?v=2e303aa47aba1121d58ac094c92b672fb7ea478ab5c1f1a3d1299cd305e2e18a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
