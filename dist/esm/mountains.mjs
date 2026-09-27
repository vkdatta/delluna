export const name="mountains";
export const id="dl_213086c249714186904d";
export const url=new URL("../icons/mountains.svg?v=fbf1daa08e968462401cb3158c9f22d6a695e29239bf973fd7f990bebd300de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
