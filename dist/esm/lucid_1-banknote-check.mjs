export const name="lucid_1-banknote-check";
export const id="dl_1b7011f3feae4b838366";
export const url=new URL("../icons/lucid_1-banknote-check.svg?v=8e2506773a53a3c084911939093f9ee284b236d589e9b2074149fb4dd97bd4c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
