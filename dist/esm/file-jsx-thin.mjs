export const name="file-jsx-thin";
export const id="dl_4a19ddf1fb554a308fee";
export const url=new URL("../icons/file-jsx-thin.svg?v=219aa3f85373abeaf6b12271a75eacf64e4ec7e23359c3f3c62c454929c2ec39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
