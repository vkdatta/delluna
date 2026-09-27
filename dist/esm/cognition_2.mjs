export const name="cognition_2";
export const id="dl_e65740d78ef5b305119a";
export const url=new URL("../icons/cognition_2.svg?v=684da41a8b56cda49d2467c066ee7d7f1915000cac7a382f8e264b28072fdce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
