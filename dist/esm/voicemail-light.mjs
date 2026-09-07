export const name="voicemail-light";
export const id="dl_2833bb4ff1a14ed18415";
export const url=new URL("../icons/V/voicemail-light.svg?v=a4c1b5cad420599905c3e93ba8cdb4fd9a413fe129e134a92abe8ddf004abed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
