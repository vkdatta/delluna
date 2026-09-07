export const name="caret-up-thin";
export const id="dl_4a9ed750b90444408603";
export const url=new URL("../icons/caret-up-thin.svg?v=f905ac607e141516aedab9144c070bc59a26aae7c53f3e3018b06c37d69c4a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
