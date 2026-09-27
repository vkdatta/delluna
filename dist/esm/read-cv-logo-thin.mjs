export const name="read-cv-logo-thin";
export const id="dl_4b117b1dae9a4d57bb11";
export const url=new URL("../icons/read-cv-logo-thin.svg?v=aceed42f2e36cdad53fbd2977566d7e76a65897099e21ab4ae650a26cc2ea123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
