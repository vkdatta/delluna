export const name="soundcloud-logo-bold";
export const id="dl_fd43c8851d5c661a99f7";
export const url=new URL("../icons/soundcloud-logo-bold.svg?v=85b068185e09145b2a23ee7771a6c0e3c496bbd787b64be75d90b5acf03dfc80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
