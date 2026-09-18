export const name="surround_sound";
export const id="dl_a2b2fc91ab2947e48cc1";
export const url=new URL("../icons/S/surround_sound.svg?v=d43ce1cf018ae615013874b1063dee757c500eac4390a0c1f33c244fdab877e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
