export const name="hand-arrow-up-thin";
export const id="dl_452bb059daa241d089e8";
export const url=new URL("../icons/hand-arrow-up-thin.svg?v=84436587d511af6b776e43544ef5720c5d503291564746a0c9b24d55d1c1453d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
