export const name="ticket-minus";
export const id="dl_318fd31645f0491187f8";
export const url=new URL("../icons/ticket-minus.svg?v=112ff0374b1d766f1ad144d02ef4a48ef25513db7b729954f772e27802d01b95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
