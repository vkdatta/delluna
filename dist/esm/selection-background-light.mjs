export const name="selection-background-light";
export const id="dl_c063f80bb2a9490e9e00";
export const url=new URL("../icons/S/selection-background-light.svg?v=7abf6b28ffa0903e3175d03d06a5bc7f26007d04f7b8cd4c38281e2251c7dc56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
