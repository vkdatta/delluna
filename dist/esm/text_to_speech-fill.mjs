export const name="text_to_speech-fill";
export const id="dl_9dd226ed21feb1874169";
export const url=new URL("../icons/text_to_speech-fill.svg?v=6e5e83038a051eeeb37ef22ebf3b088fe4c4c84bd623b4b4649a5f7a16b73975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
