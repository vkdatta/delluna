export const name="slack-logo";
export const id="dl_6c23bb34b1114f019b08";
export const url=new URL("../icons/S/slack-logo.svg?v=3ccd38a40fc9d0dcbf467a3af2f32556d106b3af798799b607a1375c02ffc6ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
