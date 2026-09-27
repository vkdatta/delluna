export const name="microsoft-excel-logo";
export const id="dl_5195e105d2164f7fb26e";
export const url=new URL("../icons/microsoft-excel-logo.svg?v=a1f2109453336a21f610a088b5b490d7eaf807873e5b5ded83cb3871797bd612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
