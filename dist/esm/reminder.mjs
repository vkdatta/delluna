export const name="reminder";
export const id="dl_d460fd9961ec26c3b92b";
export const url=new URL("../icons/reminder.svg?v=5340eb59d8f0732c8370ab8852727afe4b2b5b880336667ac522a4d45ac23da0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
