export const name="golf-thin";
export const id="dl_3527ae0df24947d98f36";
export const url=new URL("../icons/golf-thin.svg?v=7f6c104c3267654e8e0b25e137e1361a55402665f9dfa51732c9bdd20026cf5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
