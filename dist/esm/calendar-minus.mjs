export const name="calendar-minus";
export const id="dl_6706621fd30c404dbcab";
export const url=new URL("../icons/calendar-minus.svg?v=9c50686357198f2abb7215d8cb0d724a9a1a70c76cd564a5110912787cfbcf3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
