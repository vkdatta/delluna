export const name="skype-logo";
export const id="dl_522de203c8a79af59b55";
export const url=new URL("../icons/skype-logo.svg?v=c1853283a665bae45f3e18ed94f233456146d6d36ba2e9914a6c08e0b3c5d452",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
