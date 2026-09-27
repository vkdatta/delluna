export const name="clock-user";
export const id="dl_ecf36f989fe349e6aca5";
export const url=new URL("../icons/clock-user.svg?v=f7f27e1c5f9e7a3b39c393f3f4e61720e43875c7e9ea36681656cef018d0017c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
