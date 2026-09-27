export const name="shield-warning-thin";
export const id="dl_540b4b20175ed2de3237";
export const url=new URL("../icons/shield-warning-thin.svg?v=ead97d08b238d0ebe6ec3b15e21dfa841832cbc388214c938265d112985f4dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
