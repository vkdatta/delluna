export const name="nutrition-fill";
export const id="dl_7f8b22b8491a4084a57c";
export const url=new URL("../icons/nutrition-fill.svg?v=ba9ca3f716aa55748f2c2667a25ca19b254288b77516f884bdbda3003fe9a675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
