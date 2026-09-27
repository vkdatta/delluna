export const name="arrow-bend-right-up";
export const id="dl_2abc7f97d9014c8d809c";
export const url=new URL("../icons/arrow-bend-right-up.svg?v=53284360fe66d6087cd3207efde07bc0cc2df006c8e73871d16af78b41c8aadb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
