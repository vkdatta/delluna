export const name="instagram-logo-bold";
export const id="dl_5228bb126b7a4d3eba33";
export const url=new URL("../icons/instagram-logo-bold.svg?v=7a3e711a7346e143cf95bc205cafab62a6985d54b064af383685e33d1ab89df8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
