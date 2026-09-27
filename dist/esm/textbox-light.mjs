export const name="textbox-light";
export const id="dl_914d6ade601138733afe";
export const url=new URL("../icons/textbox-light.svg?v=75d070560fc520a05234eb5d186745da3f755bf7445c3e63fce8a2ff86675964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
