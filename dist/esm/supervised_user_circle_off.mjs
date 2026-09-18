export const name="supervised_user_circle_off";
export const id="dl_602c2160e7ab40f18879";
export const url=new URL("../icons/S/supervised_user_circle_off.svg?v=8c8ac25cade787b2a14387a667980a0482d6ca9bc57d58d127f711dbad60e7a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
