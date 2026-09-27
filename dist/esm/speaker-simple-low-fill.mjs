export const name="speaker-simple-low-fill";
export const id="dl_a0f3c41ad571c71ed7d0";
export const url=new URL("../icons/speaker-simple-low-fill.svg?v=95b026c41f8113127c0721be265c7d03fe03ae4c6e00686ed1989e98c5f82cc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
