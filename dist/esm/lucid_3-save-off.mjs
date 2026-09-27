export const name="lucid_3-save-off";
export const id="dl_3f8f55d88d044b498ab4";
export const url=new URL("../icons/lucid_3-save-off.svg?v=a46fd47317dc3ccd727d80883b41a7650a2788aa8cdeb13be2de0179d6bd7c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
