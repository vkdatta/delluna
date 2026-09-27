export const name="lucid_1-banknote-check";
export const id="dl_1b7011f3feae4b838366";
export const url=new URL("../icons/lucid_1-banknote-check.svg?v=0fdf0748e07d06559c449083a41c5c255e09c4799dbc99d9ec31c48accd8487f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
