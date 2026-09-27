export const name="lucid_1-bandage";
export const id="dl_225203fad7374780bbbc";
export const url=new URL("../icons/lucid_1-bandage.svg?v=3baf66fa6b3bb4a27e33a9af4cb9430941d3f6e37f0ef31e670716c765e213cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
