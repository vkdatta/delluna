export const name="asterisk-simple-duotone";
export const id="dl_acb4a4219ec24217b5d2";
export const url=new URL("../icons/asterisk-simple-duotone.svg?v=da6044a06998652e8af2a241d31abed937e9f4eb1fd17c3d1d49596538504fc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
