export const name="airplane_ticket";
export const id="dl_101b6e60e555bc8c65cc";
export const url=new URL("../icons/airplane_ticket.svg?v=d1d909975d725aaa7f1b4392d087eb97c671c75b90ceb2419001bca21d9a93af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
