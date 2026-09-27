export const name="edit_arrow_up-fill";
export const id="dl_da602d41e32eb35d611a";
export const url=new URL("../icons/edit_arrow_up-fill.svg?v=c4ec399e3b2c4b12acba65f7571675db21ffedf9876858c9afd9701c842e809a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
