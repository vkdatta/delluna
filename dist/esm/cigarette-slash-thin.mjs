export const name="cigarette-slash-thin";
export const id="dl_bd195cef86cc4cefaef4";
export const url=new URL("../icons/cigarette-slash-thin.svg?v=c4499846477c0db0ecdb16bab08dabe19cd32b0b3ba02f0c453014c0ecebca8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
