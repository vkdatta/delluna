export const name="stairs-thin";
export const id="dl_5954b788706a32df467a";
export const url=new URL("../icons/stairs-thin.svg?v=2fef157f788af7822022429c1933868764a2d6f1d040492c333f18c4ac5fc90b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
