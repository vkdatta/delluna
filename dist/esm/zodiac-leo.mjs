export const name="zodiac-leo";
export const id="dl_44cbdff2a3f4407391cb";
export const url=new URL("../icons/zodiac-leo.svg?v=f9cef30690e9e708b66d3848bafcb3b1a4ae8863d2deb7f99e68e90b76c3cfdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
