export const name="person-simple-run-light";
export const id="dl_27aee27f5f9f4ecc846c";
export const url=new URL("../icons/person-simple-run-light.svg?v=09ed4a88ba819cc6692ea6c445ddad2930eafa705ac673e7c8a0dbda98f82808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
