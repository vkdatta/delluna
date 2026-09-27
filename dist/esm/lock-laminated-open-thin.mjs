export const name="lock-laminated-open-thin";
export const id="dl_14e3897953a04675a8ca";
export const url=new URL("../icons/lock-laminated-open-thin.svg?v=c52bc82b555785e4532d6203c25710e53b2886e14117bb4a1ec8e037fe1e4b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
