export const name="road-horizon-thin";
export const id="dl_95340efe45ca4924abd3";
export const url=new URL("../icons/road-horizon-thin.svg?v=c6e59bd63b5fcd9859b153363dbead16a9beb3102398f5d02e4677ce80157691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
