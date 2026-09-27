export const name="calendar-minus";
export const id="dl_6706621fd30c404dbcab";
export const url=new URL("../icons/calendar-minus.svg?v=825c5f4bab857909723e6f53fc13d8cbef5761918438ed32b6670237bcd45fac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
