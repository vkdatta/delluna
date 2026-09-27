export const name="summarize-fill";
export const id="dl_21991206fc3b9f3cb26d";
export const url=new URL("../icons/summarize-fill.svg?v=29778a3870d7d5d77e05341853a85e651dd0eb8048489b713bee2f9d2b53b362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
