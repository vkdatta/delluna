export const name="person_pin_circle";
export const id="dl_e5775fef197d7ea799c5";
export const url=new URL("../icons/person_pin_circle.svg?v=aee4784b4a94e6e77e1ad5ef482fdf1765b02b3098bbe2e2964a9af3e4b9e2d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
