export const name="smart_card_reader_off";
export const id="dl_cae8447def119ca0d52a";
export const url=new URL("../icons/smart_card_reader_off.svg?v=b605024e67a684af411923816e9fea2e4cd29ada9e031006380db85505d84699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
