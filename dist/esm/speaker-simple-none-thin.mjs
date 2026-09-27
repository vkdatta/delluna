export const name="speaker-simple-none-thin";
export const id="dl_eda8ca7c15de721f00ec";
export const url=new URL("../icons/speaker-simple-none-thin.svg?v=67f290b5f0d26d344df53a00e1b5eb5b6de9024c300e5e5b1e1396bb8769d89e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
