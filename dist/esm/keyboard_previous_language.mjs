export const name="keyboard_previous_language";
export const id="dl_1ae975bb91bef1cbb00f";
export const url=new URL("../icons/keyboard_previous_language.svg?v=9eabdf7131df8af883693b8286f194e23c9952dde9ed2c7c57e292bf8a790704",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
