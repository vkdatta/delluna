export const name="departure_board-fill";
export const id="dl_c6ff6bb366af5321a08f";
export const url=new URL("../icons/departure_board-fill.svg?v=6f5c4e5e56ec52cf3e9733db88c7e6f29886d4b713589e67869811cdf018bd20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
