export const name="ticket-thin";
export const id="dl_aadcbb156c37038b9614";
export const url=new URL("../icons/ticket-thin.svg?v=bacb12c1c8c89d888fa37dd1e0db015128cf0e44bcd887be1e78f708bf86caa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
