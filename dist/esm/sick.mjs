export const name="sick";
export const id="dl_14af2f7f60d76b6337cd";
export const url=new URL("../icons/sick.svg?v=fd51b942b8f7fcddb540105e279180871e1db9d0aad4eb36e386b5e36b92e6ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
