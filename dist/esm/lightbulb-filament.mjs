export const name="lightbulb-filament";
export const id="dl_4da6dfe3acf342dd9b80";
export const url=new URL("../icons/lightbulb-filament.svg?v=a4e9700314a4771a1be1fd79e82b3b830a4004416844e1c64f57d4fdcbf8abba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
