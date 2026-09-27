export const name="speaker-none-thin";
export const id="dl_afd15f1d6a1329165d11";
export const url=new URL("../icons/speaker-none-thin.svg?v=032444261d193637bbb63fa51fff1f1c1b175acffcd2844e3a76e2f5e3547160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
