export const name="lamp-bold";
export const id="dl_86d2650ebca849af825b";
export const url=new URL("../icons/lamp-bold.svg?v=c50f743a16b83848990d4b9c1c137c07512472fb7c2f271eb45bb82296143666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
