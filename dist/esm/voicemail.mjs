export const name="voicemail";
export const id="dl_7be181ec87394d82ac90";
export const url=new URL("../icons/voicemail.svg?v=814eb5548ef8baab867d0c7b95f5ea896e2dbb87288510dec7cc39008dfc8e96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
