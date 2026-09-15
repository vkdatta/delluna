export const name="folder_match";
export const id="dl_a91dcf69f21d432989b5";
export const url=new URL("../icons/F/folder_match.svg?v=705d0540b9c71bcc58ffaa9b055a5c841f7ae71be255e3546e3fc2b7afa49d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
