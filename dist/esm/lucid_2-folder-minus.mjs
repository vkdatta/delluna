export const name="lucid_2-folder-minus";
export const id="dl_7aea585323ad4368bd5b";
export const url=new URL("../icons/lucid_2-folder-minus.svg?v=80147345edd3dac1adfa439f81fdb3369dc4adc3c28e32598a106eb214396028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
