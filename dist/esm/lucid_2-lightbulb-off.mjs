export const name="lucid_2-lightbulb-off";
export const id="dl_9d1f369aba5540a096e6";
export const url=new URL("../icons/lucid_2-lightbulb-off.svg?v=4117955f9a9e88a03b65029de1b87e2caf835318b0ecc93aa400b8de74cf0de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
