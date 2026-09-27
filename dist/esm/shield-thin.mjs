export const name="shield-thin";
export const id="dl_63ba393c3697f3e5b55c";
export const url=new URL("../icons/shield-thin.svg?v=7e40aed0ecfe445218d92e529ec5d356a05f2c30f79b1e40250e0add935d828b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
