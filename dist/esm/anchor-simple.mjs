export const name="anchor-simple";
export const id="dl_ae5ffc8730af43dc8c4d";
export const url=new URL("../icons/anchor-simple.svg?v=02e47ece9cebd5de17d071f953b274dc77d3a0b7f8b878073fb74be0d945b42f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
