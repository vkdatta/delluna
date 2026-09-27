export const name="lectern-light";
export const id="dl_bf790041be984092a50f";
export const url=new URL("../icons/lectern-light.svg?v=71a6d0f68a06034ebb53d4fba743e933027c67f39eb33e19aafbf6d9bd0f4b2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
