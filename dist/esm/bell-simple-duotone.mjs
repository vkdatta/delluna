export const name="bell-simple-duotone";
export const id="dl_f92b69dd26154e4d9928";
export const url=new URL("../icons/bell-simple-duotone.svg?v=83b4387dc2ad757b4366b690d65bae8c744da7e169b2fe71965f83def69b9ab1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
