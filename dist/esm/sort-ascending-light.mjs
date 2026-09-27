export const name="sort-ascending-light";
export const id="dl_3cfb3f67af696b3be54e";
export const url=new URL("../icons/sort-ascending-light.svg?v=5059b51fb8d6a6682dbf19d4bf342b9908dd6793251e342ccccaba5d1271e061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
