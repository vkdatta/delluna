export const name="martini-thin";
export const id="dl_1371172d1da9462e85f9";
export const url=new URL("../icons/martini-thin.svg?v=bfd677b1c925ebcb235d91e584e462a9288855dddcc431505e65ff08051bc5ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
