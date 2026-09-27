export const name="cloud-slash-bold";
export const id="dl_ec16ad3f77324a718356";
export const url=new URL("../icons/cloud-slash-bold.svg?v=bebd94059423d0af691332ef97439ed9674afd07b81c0aba5278f1e32a86c097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
