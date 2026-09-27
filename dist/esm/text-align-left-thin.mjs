export const name="text-align-left-thin";
export const id="dl_04ea031aa0a6a7c48141";
export const url=new URL("../icons/text-align-left-thin.svg?v=73449d6059e036fc3773382f549c85753e88528cb84dbd6ff4666d1341953819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
