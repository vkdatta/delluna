export const name="hand-swipe-right-bold";
export const id="dl_2669ba77543b43babf54";
export const url=new URL("../icons/hand-swipe-right-bold.svg?v=9127a199a819b90555cbf6e2d94c38773c5c02565013e6b9923a5a47bfc85292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
