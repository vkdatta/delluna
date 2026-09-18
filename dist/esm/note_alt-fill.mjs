export const name="note_alt-fill";
export const id="dl_ff072c99ed1c46fd9e51";
export const url=new URL("../icons/N/note_alt-fill.svg?v=a1ca963c2212391700ac9db0c5bec5f2fd5a5fe915ca8bc77fb0db765033e3be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
