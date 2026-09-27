export const name="arrow-circle-up-right-thin";
export const id="dl_8a719339b0e14e5badf6";
export const url=new URL("../icons/arrow-circle-up-right-thin.svg?v=d7a69ea902b56e8074db0d1258c18dd4847ea93b8825523573333766b3fcccc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
