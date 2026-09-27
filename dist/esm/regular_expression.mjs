export const name="regular_expression";
export const id="dl_4469d407b6dd8bb2b748";
export const url=new URL("../icons/regular_expression.svg?v=5b0089c960eca7d223869fab0b975fcefa56af1f26971c3936f6820779f870c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
