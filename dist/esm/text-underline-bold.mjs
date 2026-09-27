export const name="text-underline-bold";
export const id="dl_fe3cca791e4178ef1ef2";
export const url=new URL("../icons/text-underline-bold.svg?v=55fcb640dae3b28fe4ea44f0322d701e9f25af55b5fa82ac4bb80f9f29e029ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
