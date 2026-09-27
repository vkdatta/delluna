export const name="pint-glass-thin";
export const id="dl_af6867c5ef5a424d9550";
export const url=new URL("../icons/pint-glass-thin.svg?v=bd4b448e1dcc39df74a014ddafa0e0574a04ee60ec3e7a39bd05dc1ee1fcba13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
