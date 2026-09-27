export const name="chrome_reader_mode";
export const id="dl_32f28e64d26a99dc9d17";
export const url=new URL("../icons/chrome_reader_mode.svg?v=483bafd3abd6a2bae1d0f7a5a7cc53ecf8a52c2877fc78cebf1d0c2f1bb92013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
