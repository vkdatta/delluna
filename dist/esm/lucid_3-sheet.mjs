export const name="lucid_3-sheet";
export const id="dl_0974f81d2781478d8869";
export const url=new URL("../icons/lucid_3-sheet.svg?v=eb42879cdf0739629aee6f639ea2ef0b3e7824764fe9e265ecf80b4d5ce1faf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
