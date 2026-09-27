export const name="lucid_2-graduation-cap";
export const id="dl_d0c3249a241d43c49bbf";
export const url=new URL("../icons/lucid_2-graduation-cap.svg?v=14b453f8ca7915eb6fbe02ba85882bf1d63fbb7eaf5953d6e3b47f6977d737f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
