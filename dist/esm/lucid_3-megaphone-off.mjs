export const name="lucid_3-megaphone-off";
export const id="dl_21f3b1e927e743d09139";
export const url=new URL("../icons/lucid_3-megaphone-off.svg?v=e1c3e9c8c5c36c50cd54adaea9c513c781463f4161416a4083ce1a9839983510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
