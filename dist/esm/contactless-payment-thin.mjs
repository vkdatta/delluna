export const name="contactless-payment-thin";
export const id="dl_d230a64401a94ad48289";
export const url=new URL("../icons/contactless-payment-thin.svg?v=cff65af19567274e5759225a77a59f9f61b1043211e840a0cfd98ef1f44f17e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
