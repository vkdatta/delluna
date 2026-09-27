export const name="fingerprint-simple";
export const id="dl_3b3522aee20040c88ee9";
export const url=new URL("../icons/fingerprint-simple.svg?v=940c92149d665b4226b75d34d18b57a46afbe2877ca78e1b36e25219e8b526e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
