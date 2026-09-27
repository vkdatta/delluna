export const name="bell-simple-z-bold";
export const id="dl_f3853f54043d4d7dadb2";
export const url=new URL("../icons/bell-simple-z-bold.svg?v=d94565388d754c6cb1ae22137f1f8a5691b49f5162563ad63f8d8d56223f261d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
