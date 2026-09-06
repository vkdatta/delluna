export const name="lightbulb-filament";
export const id="dl_4da6dfe3acf342dd9b80";
export const url=new URL("../icons/lightbulb-filament.svg?v=0c22250d41a51ef90cc4a0c6a390a9c248808a20e3ece32d7fca454e7b1d453c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
