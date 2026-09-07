export const name="subtitles-slash-duotone";
export const id="dl_c4501a16015f44a586ca";
export const url=new URL("../icons/S/subtitles-slash-duotone.svg?v=87e08cb10e348585d9104d0ff73c0e5846dac91b2fa91e85f4d37631dc8a4cd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
