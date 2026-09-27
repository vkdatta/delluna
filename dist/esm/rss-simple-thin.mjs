export const name="rss-simple-thin";
export const id="dl_36387a47970c449a80d0";
export const url=new URL("../icons/rss-simple-thin.svg?v=98e295df62d84da9f1536a6b379d5feef3e626c99cbc0ad7227e324f4cf6d40f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
