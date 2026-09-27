export const name="bell-thin";
export const id="dl_597f42b5d1ad4aadb2ca";
export const url=new URL("../icons/bell-thin.svg?v=38a6eb8867758f39f377cd8b7ebae0403a165b2057eb6c851f80bf56f5443822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
