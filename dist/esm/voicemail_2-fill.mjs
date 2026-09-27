export const name="voicemail_2-fill";
export const id="dl_5c0973a5a0651bb4b7de";
export const url=new URL("../icons/voicemail_2-fill.svg?v=85ed762546cc8fa221d8130e4e1f58c83ca6c53e055024beabb540fc54ac02a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
