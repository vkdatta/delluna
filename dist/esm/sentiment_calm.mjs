export const name="sentiment_calm";
export const id="dl_34a2b2024951474a821f";
export const url=new URL("../icons/sentiment_calm.svg?v=528dbfcfb17c1998dcd0821f7c6491843ade39159a5f08e14342ece46181e910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
