export const name="monitor-play";
export const id="dl_004c0205f82c4c1895f9";
export const url=new URL("../icons/monitor-play.svg?v=9ed32e7fe840144d62322d2aa6d2b58b1eca00ddf4dc55decd16f31f4177f1a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
