export const name="lucid_2-fan";
export const id="dl_a0f935f76cea427295bc";
export const url=new URL("../icons/lucid_2-fan.svg?v=b1dffe0eaa07d3f2c85b46d5c660b947fb1550d8878f378af1dcbacfe3c10b6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
