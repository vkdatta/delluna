export const name="event_upcoming";
export const id="dl_9d6e043977f16630207b";
export const url=new URL("../icons/event_upcoming.svg?v=700a32ab6f53a471a5738d76b2ebf9cfbc8f2fb1c71f1b539ffff121284b07c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
