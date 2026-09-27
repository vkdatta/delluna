export const name="mic_alert";
export const id="dl_c1443ab36a9fa83fa819";
export const url=new URL("../icons/mic_alert.svg?v=f55d893c1441f1b52788ef39ae1ffcb666f18382cd8ea70f0588856889182b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
