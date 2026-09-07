export const name="barricade-thin";
export const id="dl_067dfadc7d254a95aaab";
export const url=new URL("../icons/barricade-thin.svg?v=063d02dd296816bd8861c0ff25ff76ebc60e19b45262927fd28dbcf2b02ba553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
