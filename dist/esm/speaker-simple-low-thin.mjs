export const name="speaker-simple-low-thin";
export const id="dl_221c512b96261a7e342d";
export const url=new URL("../icons/speaker-simple-low-thin.svg?v=1529e90631867674cd2e295c464dd9c5cee57337ced2b471f742157e3074d0a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
