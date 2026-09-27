export const name="smiley-wink-light";
export const id="dl_1d53de5305c247460863";
export const url=new URL("../icons/smiley-wink-light.svg?v=61eb53fddbdda798dc7ea313d6886fdc9c3670e7c5181556907be2c11ac4549e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
