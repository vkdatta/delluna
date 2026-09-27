export const name="dual_screen";
export const id="dl_d8b87a9093082d57f595";
export const url=new URL("../icons/dual_screen.svg?v=40033ba68f61586550d52c3f2a396ef1659baedc6397b222b6065deb54460198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
