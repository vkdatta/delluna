export const name="helicopter";
export const id="dl_341a576a68486488e817";
export const url=new URL("../icons/helicopter.svg?v=2d5430bea154720f863b83bf5a2f7371d8351194026d7f3a7761140c69ecfef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
