export const name="caret-left-bold";
export const id="dl_161adcc8f5024cfb9d95";
export const url=new URL("../icons/caret-left-bold.svg?v=df70630e3dfc8e40d0a060892f58f9cc31385e3ab97c2cf5bcaa48f1e7d5b0bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
