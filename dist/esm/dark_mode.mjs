export const name="dark_mode";
export const id="dl_56478272fd0a4d2ab9a2";
export const url=new URL("../icons/D/dark_mode.svg?v=aabd2989eced6445bd04fd53df184c062f9dc3c468511d5e91f8c127ca3cf859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
