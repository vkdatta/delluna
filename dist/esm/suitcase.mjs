export const name="suitcase";
export const id="dl_b63bf2973a3338bcc33d";
export const url=new URL("../icons/suitcase.svg?v=d03cff21fa0bd31a3040e272f6952cd1a13506fd139c19f1a37e15a49b8667a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
