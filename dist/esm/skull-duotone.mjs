export const name="skull-duotone";
export const id="dl_8781bf64e830019956ca";
export const url=new URL("../icons/skull-duotone.svg?v=e7f4ae78f75598643a691b47a80df5fa02ccef22be4aa38a4d872c0adf50d5f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
