export const name="mobile_ticket";
export const id="dl_e3f823060deee5a668ea";
export const url=new URL("../icons/mobile_ticket.svg?v=79513355abaa652533a7342b85f453543df82a22522fec2b89dd06d760b68c08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
