export const name="arrow-square-left-thin";
export const id="dl_b189c134755c4d16aece";
export const url=new URL("../icons/arrow-square-left-thin.svg?v=85147df1a886cb9eeab21c71a832d1456dd3ccb042b80eb351ec44f55ebd6e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
