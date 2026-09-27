export const name="schedule_send";
export const id="dl_7be39098c5a402e12d0d";
export const url=new URL("../icons/schedule_send.svg?v=1bc7d6f59c5251b841a11969c3a95d7dc57058521cbce4821c8ba68a517bdca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
