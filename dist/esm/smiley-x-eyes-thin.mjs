export const name="smiley-x-eyes-thin";
export const id="dl_2317633981b34c4c8418";
export const url=new URL("../icons/S/smiley-x-eyes-thin.svg?v=69a4efa6c0d7e21e1a670c7d03c38e860b782443b5bf8d14097880bf6f0faf91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
