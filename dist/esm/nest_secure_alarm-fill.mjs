export const name="nest_secure_alarm-fill";
export const id="dl_4097747b76372fb4ce84";
export const url=new URL("../icons/nest_secure_alarm-fill.svg?v=2e90bacc46f6031c15aaeb7e84d4910cc1d52c7696d144aba6269ef92cbfb612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
