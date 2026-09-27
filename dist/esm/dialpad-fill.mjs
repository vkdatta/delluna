export const name="dialpad-fill";
export const id="dl_068b01163afd4a87218e";
export const url=new URL("../icons/dialpad-fill.svg?v=4a739679eecdcccb7c2fb825f93a5d4e5e64174300e2a11129a8f19f233ed88c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
