export const name="toys-fill";
export const id="dl_65fbd8248355750f11eb";
export const url=new URL("../icons/toys-fill.svg?v=43c13ff4774a6a7c1957bef90fa744b331510ec5830660e63bb753e00a2d4704",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
