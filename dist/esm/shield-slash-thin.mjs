export const name="shield-slash-thin";
export const id="dl_491aa7e3d2014a7d6eaa";
export const url=new URL("../icons/shield-slash-thin.svg?v=c84b20c96bf7fa14915cee91d9d2da804e33e226bd217158fc380ccfba5b0c3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
