export const name="tooth-thin";
export const id="dl_3bc1243550aab6b5987e";
export const url=new URL("../icons/tooth-thin.svg?v=c4cbbb3c5df0c230dc7892b3a7ec890e3631915b32c523067106e5d35ab1ebd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
