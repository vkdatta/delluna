export const name="calculator-fill";
export const id="dl_143f74ceedcf457f869f";
export const url=new URL("../icons/calculator-fill.svg?v=d8df20c80590c485519ae935018af33aac2583271f0f791226ad8fca816fb80a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
