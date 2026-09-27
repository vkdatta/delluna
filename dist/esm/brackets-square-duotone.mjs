export const name="brackets-square-duotone";
export const id="dl_4a3fa1fcf98a49e2acc1";
export const url=new URL("../icons/brackets-square-duotone.svg?v=58a20dcf534bb768c874e7ae80b4f4fa68abb2e5424821a5e5b48ead618bd328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
