export const name="baseball-helmet-fill";
export const id="dl_f36c3ececa6b4ecb9e12";
export const url=new URL("../icons/baseball-helmet-fill.svg?v=35df989cdc421fa517f3f724ea9a1c230b240ae164c08edd8d9c420f9c88fbf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
