export const name="truck";
export const id="dl_9b2c7d40d97f4beeb7dd";
export const url=new URL("../icons/truck.svg?v=333444185a769d0692d359b5102dfaf031a87681094a14d4fd6cc343a40e955d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
