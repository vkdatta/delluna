export const name="calendar-x-light";
export const id="dl_fa8bee55194a47c28c62";
export const url=new URL("../icons/calendar-x-light.svg?v=129e36b7c0dfa2aa68fb34a7e5516ad9745931d0941959441236d6a2c5ba5738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
