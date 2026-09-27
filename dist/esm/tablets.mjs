export const name="tablets";
export const id="dl_a2914f7da3494387a335";
export const url=new URL("../icons/tablets.svg?v=d0626e2866be4cb8a433b43c5a467bdf0b9d9bb637be6551ae308fb5ddc4d144",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
