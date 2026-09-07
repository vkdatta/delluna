export const name="solar-roof-fill";
export const id="dl_94b2cff10da74cacbd60";
export const url=new URL("../icons/S/solar-roof-fill.svg?v=1afa1525a4087db245682ddf85144ba04fa7f6956b856f49463b086774e1da70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
