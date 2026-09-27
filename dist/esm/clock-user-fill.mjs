export const name="clock-user-fill";
export const id="dl_2ff584f4b7804233a02b";
export const url=new URL("../icons/clock-user-fill.svg?v=bdbfba367a97494686364b72e93bf0510784ac918354bfd4246f510aaab8a71d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
