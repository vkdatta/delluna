export const name="envelope-simple-open-bold";
export const id="dl_8dd0d52b9a7f40988405";
export const url=new URL("../icons/envelope-simple-open-bold.svg?v=e2f2a22a2235b34773c28445b251ab723fb9cb516586e0db69a8808a21439806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
