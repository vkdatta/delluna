export const name="bluetooth-thin";
export const id="dl_4f78819d8cdd4458a429";
export const url=new URL("../icons/bluetooth-thin.svg?v=02afeb71e0bf22335af056d1c05e86b8412cf8fc5758daef2058048bfdee3743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
