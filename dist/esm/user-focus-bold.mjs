export const name="user-focus-bold";
export const id="dl_b9fd8c9b7e6e77f93cfd";
export const url=new URL("../icons/user-focus-bold.svg?v=2344e2f1ca615d4f721f154adb292ca2828637a8521aeb08b100316f4f4e3dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
