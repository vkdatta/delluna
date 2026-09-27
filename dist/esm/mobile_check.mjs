export const name="mobile_check";
export const id="dl_0b1ae9fa75e4e6dc16c4";
export const url=new URL("../icons/mobile_check.svg?v=866b26669527754b90fe9ee6cc414872dd8036220b1532227f7fedb98dc5cb81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
