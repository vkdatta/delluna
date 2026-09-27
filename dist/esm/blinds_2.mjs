export const name="blinds_2";
export const id="dl_e1db29eda1914b526a4c";
export const url=new URL("../icons/blinds_2.svg?v=062672fc4bbee085b1ac154af986facdf9233239979b8b745e5cd687fe6fd819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
