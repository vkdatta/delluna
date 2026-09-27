export const name="moped-bold";
export const id="dl_e796528995a340ec856a";
export const url=new URL("../icons/moped-bold.svg?v=17bd5a5416bf372875cd5a19f6e6e44ba7284307ab73db86df2928f74ca18045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
