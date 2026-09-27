export const name="calendar-slash-light";
export const id="dl_2b237cde43324d0d9aae";
export const url=new URL("../icons/calendar-slash-light.svg?v=34d61431cbf9db29d4d8039460684ebc4b7a7369c93b3b72017b8536bc34fdc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
