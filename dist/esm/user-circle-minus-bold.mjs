export const name="user-circle-minus-bold";
export const id="dl_79ed2aa502f7452eb71f";
export const url=new URL("../icons/U/user-circle-minus-bold.svg?v=71fdc1658b95bb95f7ad918d2d22d68354a9da3d9497b1f6fd8973acf790c561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
