export const name="microsoft-word-logo-thin";
export const id="dl_0ce2c473ba6a4deab6a5";
export const url=new URL("../icons/microsoft-word-logo-thin.svg?v=f71014899d5603828a966c08074b799195e1981ee72bfa834214366fde9635db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
