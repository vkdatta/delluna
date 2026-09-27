export const name="letter_switch-fill";
export const id="dl_3c6e8f84f38c7f472376";
export const url=new URL("../icons/letter_switch-fill.svg?v=c14a8bb42492fbaedc4d8167fc7635be23aef8147d30a2b4eff76f1cee193aad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
