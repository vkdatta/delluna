export const name="currency_yuan-fill";
export const id="dl_6ed88dd935917b82fba8";
export const url=new URL("../icons/currency_yuan-fill.svg?v=79dfe855288c9a3418de41b8ca2a1bcdc8483b48501bbd8c92553aa2f38a2337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
