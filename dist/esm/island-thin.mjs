export const name="island-thin";
export const id="dl_27bdc8c816c649f2a95b";
export const url=new URL("../icons/island-thin.svg?v=c1c86cc25145ea1a59bf0937723fca64e748e4ac8583f34ce1347d6b5a7cb90f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
