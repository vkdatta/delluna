export const name="twitch-logo-bold";
export const id="dl_fb56ac6f955a0b6afc5b";
export const url=new URL("../icons/twitch-logo-bold.svg?v=118f80c20c698e58cb4d55f863519d9e391e3cbcd8a6036d382401cc9ebf2fca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
