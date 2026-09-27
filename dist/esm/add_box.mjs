export const name="add_box";
export const id="dl_a4f97ffcc291c77e1149";
export const url=new URL("../icons/add_box.svg?v=280095914f7165fff713ab5c3c51225889c26de2a7ed8ab9f4586175dc1f3236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
