export const name="arrows_left_right_circle";
export const id="dl_dbb258341e1a416db668";
export const url=new URL("../icons/arrows_left_right_circle.svg?v=2af871092b5dba59ed1c77ac3e003d14e531e1953979db99501800fc72dec348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
