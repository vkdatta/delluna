export const name="http";
export const id="dl_1fc5157332a3f85bd0c5";
export const url=new URL("../icons/http.svg?v=1883152d247b0ab560ef98a19cad1c6545848eaf5b63e0e31fc18c7c9ad48627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
