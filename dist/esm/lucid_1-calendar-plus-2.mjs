export const name="lucid_1-calendar-plus-2";
export const id="dl_7d6375cb804f4b9bb76d";
export const url=new URL("../icons/lucid_1-calendar-plus-2.svg?v=84d8ee32b0ba222e9329ec16e0a6772605c9d98469d89c4422834ba09cf0fce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
