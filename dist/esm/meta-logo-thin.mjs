export const name="meta-logo-thin";
export const id="dl_75e5d9425b0e4bbbbce4";
export const url=new URL("../icons/meta-logo-thin.svg?v=45165a749efded55e1ed30dccea4d747ab6f6bb5e4cf8e07b9f9c7292933cf39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
