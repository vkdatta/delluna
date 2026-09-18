export const name="pan_tool";
export const id="dl_fa1bf51ef60b4d9684ae";
export const url=new URL("../icons/P/pan_tool.svg?v=7261d51b28943d0d01cca3caf97cc7cd9fe26fb04eefe08cc61381e799658602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
