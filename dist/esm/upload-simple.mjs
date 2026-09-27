export const name="upload-simple";
export const id="dl_0017821864cc2aa3ddca";
export const url=new URL("../icons/upload-simple.svg?v=144ddac880afec00d91ba048ddb2a08c96cf088ade51f8041b73c53030d8cd50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
