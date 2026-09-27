export const name="arrows-in-line-horizontal";
export const id="dl_e5a8824c859d4e42aa08";
export const url=new URL("../icons/arrows-in-line-horizontal.svg?v=8921175e80f52ad50f6539776c6735db8e2551b80ce84a32509a43e9f0eff6e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
