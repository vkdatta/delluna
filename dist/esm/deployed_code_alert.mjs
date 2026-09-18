export const name="deployed_code_alert";
export const id="dl_60c15136780e42d1a150";
export const url=new URL("../icons/deployed_code_alert.svg?v=e80440cdab8cd30139b1fb8c1f1fe30a09b989c8548b26643f68ffee6faa0b39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
