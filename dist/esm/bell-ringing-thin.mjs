export const name="bell-ringing-thin";
export const id="dl_cdf47bee88f04ac29402";
export const url=new URL("../icons/bell-ringing-thin.svg?v=056da5223208567ca08204ed435f4cae28469bf2ab481a6947c78f6425de6cee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
