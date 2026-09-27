export const name="play-pause-light";
export const id="dl_27942ddab8bf4bdf9b08";
export const url=new URL("../icons/play-pause-light.svg?v=30dfde3c42c741e1cf9b087a2ed6c6cbdb575a90c441919fcd8f512099d1598d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
