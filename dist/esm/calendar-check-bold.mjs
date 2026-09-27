export const name="calendar-check-bold";
export const id="dl_a02657fcf3f44239af16";
export const url=new URL("../icons/calendar-check-bold.svg?v=e368aa59639e054dbb9190665a537d6ab2b4d8dd4be5c7647019ae1c6dbfb93d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
