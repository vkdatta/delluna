export const name="brightness_alert-fill";
export const id="dl_44b1fc3aebcb65f7ca0d";
export const url=new URL("../icons/brightness_alert-fill.svg?v=a2a255b9cfdb8bfd9499172e6538ad344dcb63c646e64e1b61de6c104bfb4d88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
