export const name="arrows_left_right_circle";
export const id="dl_e9e8efc7748c639e8b07";
export const url=new URL("../icons/arrows_left_right_circle.svg?v=89a027b7cd1045c07feb2f4c19afb2f73b4a74aa6682a78d19c59609152c4017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
