export const name="vignette_2";
export const id="dl_8f4d86d9a648295fc6a8";
export const url=new URL("../icons/vignette_2.svg?v=cc2997d7efbae8daa05231a4dc834a729e294d6ed4e214a1d523b537b019b980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
