export const name="corners-in-fill";
export const id="dl_1ada138629b74f76ae1d";
export const url=new URL("../icons/corners-in-fill.svg?v=943e4fb071c960911293528a7000b4c26235ac38c84daa068232aebc96bb7499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
