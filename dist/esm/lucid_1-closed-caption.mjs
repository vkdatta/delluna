export const name="lucid_1-closed-caption";
export const id="dl_8903e1963d664ab6afdc";
export const url=new URL("../icons/lucid_1-closed-caption.svg?v=83a8680cf95c5d875256f7dd9fd3f9622c59467990f6461b6fb4f7ba4fb37a7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
