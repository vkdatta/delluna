export const name="theater_comedy";
export const id="dl_6a10fd05d26f5e373648";
export const url=new URL("../icons/theater_comedy.svg?v=05b6b04bbdeec72bd35529a73b48db55db61291dae79d82dd2cbbf7ed7b6b8dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
