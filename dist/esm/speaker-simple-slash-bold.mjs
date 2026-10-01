export const name="speaker-simple-slash-bold";
export const id="dl_efb885b92f1c4efdcabb";
export const url=new URL("../icons/speaker-simple-slash-bold.svg?v=47bb960473326c731a431af5d22a736dc86ecd648280771d1d98cbc64a6f7562",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
