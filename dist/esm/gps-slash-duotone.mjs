export const name="gps-slash-duotone";
export const id="dl_7203958c9a534f3a8e85";
export const url=new URL("../icons/gps-slash-duotone.svg?v=a0aa15c96008304f76fbc12e6e47bc193afe6adda926934463dc5078461f4dd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
