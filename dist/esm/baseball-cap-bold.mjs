export const name="baseball-cap-bold";
export const id="dl_0aceeab9e9604ee0bf48";
export const url=new URL("../icons/baseball-cap-bold.svg?v=d737ab16b55822f5977c5c298f969955a6966f051dedba0bc6cf2ea2705a1924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
