export const name="google-photos-logo";
export const id="dl_055ff1ce13b24228b03b";
export const url=new URL("../icons/google-photos-logo.svg?v=d1a2c2317c28a15a1cb0d002053ce8e4569dbc95c50b3fb98ae9fd0f9a1ea6f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
