export const name="asterisk-simple-bold";
export const id="dl_562acf56c4344ecbbffa";
export const url=new URL("../icons/asterisk-simple-bold.svg?v=38fa1d26f2afc8fbf38b7a52d873765beeb8cae2cdc1a9c55893e28c621bf9ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
