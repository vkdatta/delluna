export const name="space_dashboard_2";
export const id="dl_4aea81c2b2b3bbac3850";
export const url=new URL("../icons/space_dashboard_2.svg?v=e764ad46eff1bcd1be781a75a49891635d04447a23bd1ade39c232a71691a57c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
