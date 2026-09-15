export const name="filter_1-fill";
export const id="dl_ae6d46b3741544d28323";
export const url=new URL("../icons/F/filter_1-fill.svg?v=c13534e4388f232749053f2044cbc331693d675a2b81c767e49c516a010975c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
