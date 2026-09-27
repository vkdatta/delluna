export const name="text-strikethrough-fill";
export const id="dl_3cb5dfa0e61f2f3afd26";
export const url=new URL("../icons/text-strikethrough-fill.svg?v=ab29b0a92cf0d7760b575b108352f810b5195c0d6acbd475b0b5de9103535aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
