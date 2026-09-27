export const name="disco-ball-thin";
export const id="dl_bf259018425241659f7b";
export const url=new URL("../icons/disco-ball-thin.svg?v=6e661585746fbf1fd61ae11d5fa47c9bab11c2347bed5f06590c2563c074a1fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
