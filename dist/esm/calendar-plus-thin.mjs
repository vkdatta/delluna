export const name="calendar-plus-thin";
export const id="dl_c5846d9510da4ecfb3cd";
export const url=new URL("../icons/calendar-plus-thin.svg?v=1a7c8c78f4a53abae733d47c6e3c8035ce0b49e0a50a44d680121763289ef65a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
