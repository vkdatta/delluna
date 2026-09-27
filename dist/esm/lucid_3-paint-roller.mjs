export const name="lucid_3-paint-roller";
export const id="dl_f9360ec842b1487c8d4b";
export const url=new URL("../icons/lucid_3-paint-roller.svg?v=b9f165186db7edb65a4accb368f885b2f79c0d48d77f7207a128226eb762b9b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
