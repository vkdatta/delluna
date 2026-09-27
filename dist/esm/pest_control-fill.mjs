export const name="pest_control-fill";
export const id="dl_a513d796036075ab5504";
export const url=new URL("../icons/pest_control-fill.svg?v=41ee73ec6306f17b80c8e94515850b1d9322e0c42aa9a991f265bea19435c16b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
