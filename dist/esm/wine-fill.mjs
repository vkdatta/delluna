export const name="wine-fill";
export const id="dl_bd2184ebc7b20723cc9a";
export const url=new URL("../icons/wine-fill.svg?v=080414b555ac943ce827d99982fa8aa4a30dc699ea1c664c0933a659f7bc6443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
