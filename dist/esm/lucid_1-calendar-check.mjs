export const name="lucid_1-calendar-check";
export const id="dl_fdf3cddc1782485f8ec3";
export const url=new URL("../icons/lucid_1-calendar-check.svg?v=b776bbfd752c4a8a0cb15e7663aef54ce825289dc6c125dad41e3b8df3f37b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
