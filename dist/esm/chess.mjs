export const name="chess";
export const id="dl_87ee9348138f442187c4";
export const url=new URL("../icons/chess.svg?v=2f09b184a703648b2d670e3269ac13caaec883b48664fc8b5890667596cf5346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
