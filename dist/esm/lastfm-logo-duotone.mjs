export const name="lastfm-logo-duotone";
export const id="dl_b7f833d840ad40748177";
export const url=new URL("../icons/lastfm-logo-duotone.svg?v=6b125fa4d71f8eb9c98ddeb038719ddae62053c981cff403826263fae70ecedd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
