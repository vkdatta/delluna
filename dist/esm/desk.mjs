export const name="desk";
export const id="dl_6c7bc253188d4c92b33d";
export const url=new URL("../icons/desk.svg?v=2e350fc9f96bc515a73586f4106c0876deb1faf901ebf501b7bcc5ba838a5c6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
