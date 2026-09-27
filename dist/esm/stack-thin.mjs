export const name="stack-thin";
export const id="dl_7a1348e7e87c026effb4";
export const url=new URL("../icons/stack-thin.svg?v=e00b305435fa7a315617b36eabee0ca9260781e8853671bf68d7b8770845abae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
