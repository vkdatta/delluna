export const name="arrow-square-down-left-thin";
export const id="dl_088675a7acd64dd984a7";
export const url=new URL("../icons/arrow-square-down-left-thin.svg?v=080a68d31d92978365f3452744a59898b5a4213869730d0467f8de7f4d87ece5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
