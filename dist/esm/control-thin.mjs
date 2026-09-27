export const name="control-thin";
export const id="dl_330ef4f59e124c07a63d";
export const url=new URL("../icons/control-thin.svg?v=75642b14b874fd172417a20c06c24091f2ef1c87924aa58f6959c0a123056169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
