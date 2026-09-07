export const name="telegram-logo-light";
export const id="dl_66f6d658862c4a2a98f8";
export const url=new URL("../icons/T/telegram-logo-light.svg?v=dca84eb2996db5472af26c07d27f43316ea039fae4e454eef96eb9ae27d10769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
