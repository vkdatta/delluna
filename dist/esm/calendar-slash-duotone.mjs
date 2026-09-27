export const name="calendar-slash-duotone";
export const id="dl_d69e674f68914f218ae1";
export const url=new URL("../icons/calendar-slash-duotone.svg?v=b92b4ac67d458ba556bd00083fc5f1267a971ad1504956cccdeec498c0a46bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
