export const name="asterisk-simple-bold";
export const id="dl_562acf56c4344ecbbffa";
export const url=new URL("../icons/asterisk-simple-bold.svg?v=813f54c27c7c1b5fe0a2b9b04682171981307386fa63c741a7b195d65fa07890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
