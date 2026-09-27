export const name="gavel-duotone";
export const id="dl_aaeea7b1e09d460aa16e";
export const url=new URL("../icons/gavel-duotone.svg?v=50fa6c36fd05dc12fdce116f3fbc144d6b107a34930bb19c8c8070137dfd5d34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
