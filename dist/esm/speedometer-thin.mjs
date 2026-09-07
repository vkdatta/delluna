export const name="speedometer-thin";
export const id="dl_ac98c745cf654c1cb251";
export const url=new URL("../icons/S/speedometer-thin.svg?v=71bf8a03210f1241c734285aa027734d2ff0c9884a881a3e8985b9c0de4eba1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
