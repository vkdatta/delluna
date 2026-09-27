export const name="timer_10_select";
export const id="dl_aca5b68016ddadf267c2";
export const url=new URL("../icons/timer_10_select.svg?v=c301b68fb80c6b67a9dd50e24756c887d267e0e93de1f88ab2e94625033ca41a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
