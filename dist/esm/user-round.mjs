export const name="user-round";
export const id="dl_94809bb65a2845c589ca";
export const url=new URL("../icons/user-round.svg?v=2bdb858e60f62b9ccacd61106f426766db2cdb30dc8a26427d984563a70243b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
