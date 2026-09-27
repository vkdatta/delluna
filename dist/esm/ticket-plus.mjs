export const name="ticket-plus";
export const id="dl_764a3aa3578745b5b8a2";
export const url=new URL("../icons/ticket-plus.svg?v=a920692814a8917fe355419938330f185cf3e5ed9e3139714ddfbb3196bde915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
