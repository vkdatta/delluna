export const name="arrow-bend-down-left";
export const id="dl_4db399f43bc04f178fd3";
export const url=new URL("../icons/arrow-bend-down-left.svg?v=b7b9a733f0cd74cb6fc1de841f408554df625b46a96770d408da378264e2be99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
