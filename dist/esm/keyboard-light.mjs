export const name="keyboard-light";
export const id="dl_c746794866904e098343";
export const url=new URL("../icons/keyboard-light.svg?v=c387b6cbcef6e567a2b5ce9394f70c72d51c48aee431267c3262114a365aee97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
