export const name="letter-circle-v-bold";
export const id="dl_e1e6e00c472e4a7b9604";
export const url=new URL("../icons/letter-circle-v-bold.svg?v=307e57cf7e4bec811545a15b27f7d89c0eaf9265edf92b8c35a673b48aea8c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
