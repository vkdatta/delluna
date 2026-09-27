export const name="tatami_seat";
export const id="dl_1f6d0812b8a00bb8a310";
export const url=new URL("../icons/tatami_seat.svg?v=c3dfe291323a5f67cabc1a1695430e81a09a0988dd40875abb084321c391d9e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
