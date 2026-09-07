export const name="speaker-simple-slash";
export const id="dl_fce6876590bb4d22a29f";
export const url=new URL("../icons/S/speaker-simple-slash.svg?v=281806441aa9735217dedf8a699f486e9888be2d1e0d225670047d78cec50f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
