export const name="lucid_3-screen-share";
export const id="dl_7eb9b26f54244416b734";
export const url=new URL("../icons/lucid_3-screen-share.svg?v=61af1421be7a57fa5238394c627537521ef11920fc29e8984c36b202e59cb6d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
