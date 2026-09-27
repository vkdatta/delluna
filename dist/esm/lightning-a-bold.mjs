export const name="lightning-a-bold";
export const id="dl_6da23cc01dfc479da76d";
export const url=new URL("../icons/lightning-a-bold.svg?v=226372cd391067c05213735806c99b78e08eab9a0820e5ef07ecc2b6bf1cef8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
