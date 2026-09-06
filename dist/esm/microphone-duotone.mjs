export const name="microphone-duotone";
export const id="dl_9f9b6d635a3148dab541";
export const url=new URL("../icons/microphone-duotone.svg?v=c1bd548c24ecfaaa07054cefd93885537c518234691f9614e144e52aa19eedce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
