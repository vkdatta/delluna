export const name="lowercase-fill";
export const id="dl_2f7ad9150772d037c921";
export const url=new URL("../icons/lowercase-fill.svg?v=4bd724c6c818567b8fc84adbbbad963fa8311e59cb51b5c4fcdd2938bd1a27bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
