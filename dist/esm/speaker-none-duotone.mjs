export const name="speaker-none-duotone";
export const id="dl_a5a09ca041dca80eccff";
export const url=new URL("../icons/speaker-none-duotone.svg?v=1e67d99890ec82949d4cdcba03968fb111b703ca80134936474852a325dda0d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
