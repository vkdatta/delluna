export const name="square-logo-thin";
export const id="dl_2240815fde5319be1798";
export const url=new URL("../icons/square-logo-thin.svg?v=b575ee4049e5c40a61f5e90fb8948a9c98fc98c253b6bcb07577b5ae54f6b4cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
