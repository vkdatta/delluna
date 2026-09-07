export const name="user-bold";
export const id="dl_f45d5a3faba34a758380";
export const url=new URL("../icons/U/user-bold.svg?v=a4739174a602675d627b029aa524dd9345c56838ed1da34b5e1c3d02611792d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
