export const name="chrome_reader_mode-fill";
export const id="dl_861545a9e77069103962";
export const url=new URL("../icons/chrome_reader_mode-fill.svg?v=111fe39c104327fc139f16a57ff70738d2285091d2b5e780bd32ed32dfb9cfc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
