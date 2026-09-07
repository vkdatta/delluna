export const name="lucid_3-pen-off";
export const id="dl_f83169a6f4134d0cbf7a";
export const url=new URL("../icons/lucid_3-pen-off.svg?v=ce3f38bfb70f715357a2c5f375734a51a57386fcd7d2166da0238d8c9b75f97b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
