export const name="call-bell-thin";
export const id="dl_6d0c6f40602744719620";
export const url=new URL("../icons/call-bell-thin.svg?v=3e928af7e1327825073f6c20d0b82e9cb1670e2a46363febbf8c37a47e2cc8e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
