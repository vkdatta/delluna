export const name="person_text";
export const id="dl_af67f06dae03b94d1f2d";
export const url=new URL("../icons/person_text.svg?v=875d4bdde7e44eec7c370ee2d97125a493e89cf192ba97530719060cb10b51b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
