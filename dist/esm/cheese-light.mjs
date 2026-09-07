export const name="cheese-light";
export const id="dl_1670a4735dd94cd0915c";
export const url=new URL("../icons/cheese-light.svg?v=1261f43dd0313b184a3164d36e8fda002980244a76bcf93b13f732d28a0a686f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
