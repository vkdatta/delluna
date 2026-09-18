export const name="tv_off";
export const id="dl_fba4b66a96a347a49373";
export const url=new URL("../icons/T/tv_off.svg?v=00373433a65ffe6856e3e1086d38ae27245497712350d77fda1d503da526e8bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
