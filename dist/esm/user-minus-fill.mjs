export const name="user-minus-fill";
export const id="dl_ea6c4cef9e2ebac17364";
export const url=new URL("../icons/user-minus-fill.svg?v=0b5b74d8c18930734c965dc9bbc332624687ef3b2ef6a8f5d3669944ab2de71e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
