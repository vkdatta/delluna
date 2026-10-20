export const name="bell-minus";
export const id="dl_c353882438f64dc59d56";
export const url=new URL("../icons/bell-minus.svg?v=38825c5813371928876e4424f821585285ed8034bf09751efcb7b82565f48689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
