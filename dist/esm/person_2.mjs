export const name="person_2";
export const id="dl_49e3b1f032d99568846c";
export const url=new URL("../icons/person_2.svg?v=21165001c806e2df68309c3e40d6364215068e51c3798b295626443e5be28832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
