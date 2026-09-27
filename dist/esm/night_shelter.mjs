export const name="night_shelter";
export const id="dl_e7261abe9b828a920e71";
export const url=new URL("../icons/night_shelter.svg?v=9cfcda73bfde45961badd2bcf86a4ae8b0dd17ad0bf21aa953f004d94974a208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
