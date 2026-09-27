export const name="lasso_select-fill";
export const id="dl_d1c500d76012eb725d28";
export const url=new URL("../icons/lasso_select-fill.svg?v=a57fcf1a7c3fee01207c58245d7cf8b1cd2b2613d14f41231215c90fbe6c533e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
