export const name="spotify-logo";
export const id="dl_e85eb77d9fe80c626bd1";
export const url=new URL("../icons/spotify-logo.svg?v=c7c60ba98797baeb47e8d91728e9480b7c26c75bdcb7d8ce83d49d36a08f7254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
