export const name="person_3";
export const id="dl_b01f3ba89ace67b0c966";
export const url=new URL("../icons/person_3.svg?v=ba981ddc20dec321c600b7bf329eef14c62debfd0e51af7ba0e91f63823c53ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
