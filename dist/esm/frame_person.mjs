export const name="frame_person";
export const id="dl_faae3aae8cce7ebec809";
export const url=new URL("../icons/frame_person.svg?v=121118b5d9b513420d2cb360323af6be71e682c731558918219529b21198ee18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
