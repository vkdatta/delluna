export const name="heart_minus-fill";
export const id="dl_7c62c3eb2e830a3e8d09";
export const url=new URL("../icons/heart_minus-fill.svg?v=701daf9191be2952d79f78c87bd52e64c663f5856610c59e341b62054b1ae02f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
