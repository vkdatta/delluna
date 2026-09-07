export const name="textbox-bold";
export const id="dl_4b8221165c764e878118";
export const url=new URL("../icons/T/textbox-bold.svg?v=9ad37296f735c45bf3c9df0d947da11d82e967a11d2d2f1627f70ae435b0d37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
