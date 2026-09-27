export const name="calendar_today";
export const id="dl_e4804e2cd0b50359d7e0";
export const url=new URL("../icons/calendar_today.svg?v=50b5781d790f76649f3c23594000ffc3cd13197de77d384c09579037e1aae97f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
