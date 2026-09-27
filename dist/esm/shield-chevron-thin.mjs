export const name="shield-chevron-thin";
export const id="dl_22a3743a177a18a0c4b6";
export const url=new URL("../icons/shield-chevron-thin.svg?v=936f5c89d6f4067bb7d6736ddb19b4ec71614813735438f1a5e1affc17dfbd38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
