export const name="doorbell";
export const id="dl_05affcf1c85ca842fd46";
export const url=new URL("../icons/doorbell.svg?v=c7b2cb1d82c504b597434bb8f6cb6affb802d416c04c9dca373a6981fd690358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
