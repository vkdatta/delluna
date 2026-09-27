export const name="student-fill";
export const id="dl_befc536eba050cd82670";
export const url=new URL("../icons/student-fill.svg?v=e503d0783280ce7e2fc27947d281ff4538bed5d6bbd27f4259ec30562d98d7e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
