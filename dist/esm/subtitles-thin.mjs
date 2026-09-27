export const name="subtitles-thin";
export const id="dl_6f03f8476a0359ebe309";
export const url=new URL("../icons/subtitles-thin.svg?v=59a8ba76f87dad23afb0fb25a4bc7e4a93ac5bea0912d50a4ce08e6a14bd5be2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
