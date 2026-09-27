export const name="supervised_user_circle";
export const id="dl_d4dfe2d8874b169ca85f";
export const url=new URL("../icons/supervised_user_circle.svg?v=f36e32cc9d88f0ba0645019cabd42f9a9fdbaa4f25eb4ba8748fb95a630602c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
