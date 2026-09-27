export const name="css";
export const id="dl_00588440125acd303c0d";
export const url=new URL("../icons/css.svg?v=dd28301a73b1074a0c07599404e18ded42a8e3cac927f1932bbce157723a3c88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
