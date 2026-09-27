export const name="jeep-thin";
export const id="dl_511c670032dc43ef8c58";
export const url=new URL("../icons/jeep-thin.svg?v=7a8b5a51d72ba03392b0992ff887ad0c5bf582a2063df84c52cb4609ec5481d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
