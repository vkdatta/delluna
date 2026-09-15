export const name="calendar_view_week";
export const id="dl_d747c9b40aeb41c49e18";
export const url=new URL("../icons/C/calendar_view_week.svg?v=3f0575140e4dd204ca4b888af6e235d54d29df22e23793a1daaba82d6c075410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
