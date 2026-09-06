export const name="egg-crack-duotone";
export const id="dl_2f37c43bff414eb6a463";
export const url=new URL("../icons/egg-crack-duotone.svg?v=24092205c1578391c51b2b5427cae7b998df57da7cc6a9879acda91c482fa90a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
