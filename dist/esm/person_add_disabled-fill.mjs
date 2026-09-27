export const name="person_add_disabled-fill";
export const id="dl_da1a9fdc298eb801209d";
export const url=new URL("../icons/person_add_disabled-fill.svg?v=90277920156981ae1a13f57ea7ec2173e2a7346606d6ad1d289969fad914f8eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
