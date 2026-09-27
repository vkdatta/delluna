export const name="bell-simple-slash-duotone";
export const id="dl_d7af9e2f92f945638cc4";
export const url=new URL("../icons/bell-simple-slash-duotone.svg?v=3c2ff036bf619b44f13ec7e8ef92b88f9069f2541da4f2ddd1d488b74c4ae5ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
