export const name="toggle-right-bold";
export const id="dl_561023e6ac82a57089f9";
export const url=new URL("../icons/toggle-right-bold.svg?v=0545cf48de4905a5d0e3395b81ac199d4076cacdc5753b98b5f793e1fbcd0c32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
