export const name="whistle";
export const id="dl_f30d64eed99549b3ad82";
export const url=new URL("../icons/whistle.svg?v=d8f4327a6dc5f4d238bd6a72d12581577b0dd4b2acf9292a536c057415872fb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
