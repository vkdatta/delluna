export const name="arrow-elbow-left-down-thin";
export const id="dl_8d9f36c835f04716a2d2";
export const url=new URL("../icons/arrow-elbow-left-down-thin.svg?v=e276163db49a56b13bc3877360f574ef09f7d51e327d2c0a2e3925bb118d7678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
