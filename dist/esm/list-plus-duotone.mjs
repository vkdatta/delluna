export const name="list-plus-duotone";
export const id="dl_417aa126f11449fba081";
export const url=new URL("../icons/list-plus-duotone.svg?v=73750fb3e2356654ebd3a2aeeb98e79996a6cfb45f38255a28de953cc28e7140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
