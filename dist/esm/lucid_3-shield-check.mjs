export const name="lucid_3-shield-check";
export const id="dl_f2ec4fad1dab4c29b473";
export const url=new URL("../icons/lucid_3-shield-check.svg?v=313412a47126871d9cc4422359057fff124f641f9e7f20c03cc7835597532a30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
