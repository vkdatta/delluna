export const name="pill_off";
export const id="dl_b6d721db034cf736a57f";
export const url=new URL("../icons/pill_off.svg?v=7bca695a5e736f7c2a9ca87d1fccd0432dc159cc586a9bfdedf193dfe685e9f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
