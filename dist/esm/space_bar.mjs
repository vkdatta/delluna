export const name="space_bar";
export const id="dl_69cb03b5da52af452b32";
export const url=new URL("../icons/space_bar.svg?v=0eba51e8b5b3a01c1c7436d040b214355a9c7f647c6f18bf74e835d88a35d5b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
