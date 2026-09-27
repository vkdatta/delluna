export const name="handbag-fill";
export const id="dl_5fbc27872edf4767a73d";
export const url=new URL("../icons/handbag-fill.svg?v=17c9709e3ad976369d2ff27e782c3597b53704a0bfaafcb3fd46f5d6dd59a1cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
