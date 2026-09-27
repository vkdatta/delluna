export const name="lucid_3-philippine-peso";
export const id="dl_0cc10c8dd53d45bcbe72";
export const url=new URL("../icons/lucid_3-philippine-peso.svg?v=e8f5ce981e7da3a158a7e49cb1fe5c347916d36c8ad1065629f500e817e6ee1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
