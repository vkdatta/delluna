export const name="colorize";
export const id="dl_d9ec963126ea1ca24c54";
export const url=new URL("../icons/colorize.svg?v=fe202a5d55668611fc670259122cac4d20179512fe0222dd45c63d6b90e39e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
