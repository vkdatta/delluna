export const name="google-photos-logo";
export const id="dl_055ff1ce13b24228b03b";
export const url=new URL("../icons/google-photos-logo.svg?v=589c776e01d2a039ba00cbeb392ba01914f38617d1af641fff4cbc9d4fcf4849",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
