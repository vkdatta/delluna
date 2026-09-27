export const name="settings_remote";
export const id="dl_a433c4de5c31d2e9c325";
export const url=new URL("../icons/settings_remote.svg?v=6e54443a62de3262212c6b729cccc6e79f62e37f3c81c6fa315be5f0cad2c964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
