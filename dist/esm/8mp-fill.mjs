export const name="8mp-fill";
export const id="dl_7c908b5744b94412dd5a";
export const url=new URL("../icons/8mp-fill.svg?v=c6a823d7daf94a951c719482220f7e36f4dc0e0ccf3b529a65cc82927c3ce1b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
