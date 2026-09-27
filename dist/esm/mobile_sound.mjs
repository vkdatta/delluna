export const name="mobile_sound";
export const id="dl_54ac7392760778fbba79";
export const url=new URL("../icons/mobile_sound.svg?v=bd24151c4a96a60c20ddb2fdf6af44380242ba604bc9071f19bbf57ed4c3a0cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
